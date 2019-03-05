import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { IShowmap } from './ishowmap';
import { Observable, throwError } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class ShowService {

  
 
  constructor(private http : HttpClient ) {}



getShowMapData(name1:string): Observable<IShowmap[]>{
  return this.http.get<IShowmap[]>(
    `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name1}`)
   
   
  
  }

  getShow(name:string):Observable<IShowmap>{
   return this.http.get<IShowmap>(
    `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}`)
   

   
} 

}

/*private transformToShowData(data : IShowMapData) : IShowmap {
  
  return {
    name :      data.show.name,
    language :  data.show.language,
    type:data.show.type
    
    
     
    
  }
}*/


  
//schedule: data.schedule.time + " " + data.schedule.days[0],



/*.pipe(
      (data => this.(data))
    
.pipe(map(data => this.transformToShowData(data))
 name:string,
   language:string,
   schedule:{
     time:string,
     days:string
   },
   network:string,
   rating:{
     average:number
   }
   network:data.network.name,
    rating:data.rating.average,
    summary:data.summary
*/