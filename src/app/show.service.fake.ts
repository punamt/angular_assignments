import { Observable,of } from "rxjs";

import {IShowService} from './show.service'
import { IShowmap } from './ishowmap';


export class ShowServiceFake implements IShowService{
    private fakeShow:IShowmap={
            id: 103,  
            name: "girls",
            type:"drama",
            language:"english",
            genres:[],
            status:"running",
            premiered:"12-20-2006",
            officialSite:"www.abc.com",
            schedule :{
                time:"121212",
                days:"monday"
            },
            rating:{
                average:"8.7"
            },
            network:{
                name:"www",
                country:{
                    name:"www"
                }
            },
            image:{
                medium:"",
                large:""
            },
            summary:""
   


    }


  /*  public getShowMapData(search:string):Observable<IShowmap[]>{
        return of(this.fakeShow);
        
    }*/

    public getShow(search:string):Observable<IShowmap>{
        return of(this.fakeShow);
        
    }
}