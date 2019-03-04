import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating : number;
   
    starWidth: number;
    rating1=(this.rating);
  constructor() { }

  ngOnChanges(): void{
    this.starWidth  = (this.rating1) * 175 / 10;
    
}

}
