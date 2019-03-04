import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ShowService } from '../show.service';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { FormControl,Validators } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  search= new FormControl('',[Validators.minLength(3)])
  

 // @Output() searchEvent=new EventEmitter<string>();

 
 
  constructor(private showService:ShowService,private route:ActivatedRoute,private router:Router) { }

  getErrorMessage(){
    return this.search.hasError('minlength') ? 'Type more than 3 characters to search.': '';
  }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((data : string)=>
       { 
        if(!this.search.invalid){
           // this.searchEvent.emit(data)
          this.displaySearchResult(data)
        }
      }
    )

    }

    displaySearchResult(searchData:string){
      // this.router.navigate(['/current-show']);
       this.router.navigate(['/current-show',searchData]);
     }
 
}



/*modelChange(value:string){{ id: heroId, foo: 'foo' }]);
}
  this.search=value;
  this.showService.getShowMapData(this.search).subscribe(
    data =>  this.current = data
      
  )

}*/