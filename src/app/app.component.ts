import { Component } from '@angular/core';
import { ShowService } from './show.service';
import {IShowmap} from './ishowmap'
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  //currentShow:IShowmap[]=[]

  //constructor(private showService:ShowService,private route:ActivatedRoute,private router:Router){}

 /* doSearch(data){
     this.showService.getShowMapData(data).subscribe(
       data => { this.currentShow = data,
        console.log(this.currentShow)
       } 
     )
   }

   
   /*onActivate(event) {
    window.scroll(0,0);
    
      }*/
  }

