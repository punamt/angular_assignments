import { async, ComponentFixture,fakeAsync, TestBed,inject,tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

import { ShowDetailComponent } from './show-detail.component';
import { ShowService } from '../show.service';
import { ShowServiceFake } from '../show.service.fake';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { CurrentShowComponent } from '../current-show/current-show.component';

describe('ShowDetailComponent', () => {
  let router : Router;
  let location : Location;
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes([
          {path:'current-show/:search',component:CurrentShowComponent},
          ]),
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule],
      declarations: [ ShowDetailComponent,CurrentShowComponent ],
      
      //  useclass:ShowServiceFake}],
    })
    .compileComponents();

    //reference to injected router from testbed
    router=TestBed.get(Router);

    //reference to injected location strategy 
    location=TestBed.get(Location);

    //to implement routing we need to have some component with router outlet that is root App component
    //testbed to create root app component 
    fixture=TestBed.createComponent(ShowDetailComponent);

    // this is special function to sets up location change listener after forms the initial navigation
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search text should not be valid (length is less than 3)',() => {
    
    component.search.setValue('a')
    expect(component.search.invalid).toBeTruthy();
  });

  it('search text should  be valid (length is 3 or more)',() => {
    
    component.search.setValue('girls')
    expect(component.search.valid).toBeTruthy();
  });
  
  it('displaySearchResult function should be defined',() => {
   
    expect(component.displaySearchResult("girls")).toBeDefined;
  });

  //routing is the asynch activity
  it('navigate to "current-show" ', fakeAsync(() => {
   
    let  searchData  = 'girls';
    //component.displaySearchResult(searchData);
     router.navigate(['/current-show/:searchData']);
    //to wait all pending promises and async works to finish
    tick();
    expect(location.path()).toBe('/current-show/:searchData');
    
}));

  


 

  });
