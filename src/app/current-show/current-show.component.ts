import { Component, OnInit, Input } from '@angular/core';
import { ShowService } from '../show.service';
import { IShowmap } from '../ishowmap';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {

 //@Input() current:IShowmap[];
  
 current:IShowmap[]=[];

  constructor(private showService:ShowService,private route:ActivatedRoute,private router:Router){}

 
  

   ngOnInit()  {
        let  param = this.route.snapshot.paramMap.get('search');
        console.log("param" + param);
         if(param){
            let name= param
            this.getShowData(name);
        }
    }  
    
    getShowData(name:string):void{
      this.showService.getShowMapData(name).subscribe(
        data => { this.current = data,
         console.log(this.current)
        } 
      )
    }
  /* this.showService.getShowMapData(this.value).subscribe(
      data =>  this.current = data
        
    )*/
}
       

  


