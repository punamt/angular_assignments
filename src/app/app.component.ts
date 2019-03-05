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
  
  }

