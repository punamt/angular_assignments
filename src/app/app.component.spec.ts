import { TestBed, async, fakeAsync,tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"; //import material schema
 import { CurrentShowComponent } from './current-show/current-show.component';
 import { ShowDetailComponent } from './show-detail/show-detail.component';
 import { ShowDataComponent } from './show-data/show-data.component';
 import { WelcomeComponent } from './home/welcome.component';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { StarComponent } from './shared/star.component';
import { ShowService } from "./show.service";
import { ShowServiceFake } from "./show.service.fake";

describe('AppComponent', () => {
  let router : Router;
  let location : Location;
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path:'show-detail',component:ShowDetailComponent},
         {path:'home',component:WelcomeComponent},
      ]),
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
      AppComponent,
       ShowDetailComponent,
       WelcomeComponent,
      ],
      providers: [{ provide: ShowService, useClass: ShowServiceFake }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    //reference to injected router from testbed
    router=TestBed.get(Router);

    //reference to injected location strategy 
    location=TestBed.get(Location);

    //to implement routing we need to have some component with router outlet that is root App component
    //testbed to create root app component 
    fixture=TestBed.createComponent(AppComponent);

    // this is special function to sets up location change listener after forms the initial navigation
    router.initialNavigation();

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tv-show-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tv-show-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('TV Maze APP');
  });

  //routing is the asynch activity
  it('naviate to "show-detail" redirects you to /showDetail', fakeAsync(() => {
    router.navigate(['/show-detail']);
    //to wait all pending promises and async works to finish
    tick();
    expect(location.path()).toBe('/show-detail');
}));

it('naviate to "home" redirects you to /home', fakeAsync(() => {
  router.navigate(['/home']);
  tick();
  expect(location.path()).toBe('/home');
}));


});
