import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CurrentShowComponent } from './current-show.component';
import { ShowServiceFake } from '../show.service.fake';

describe('CurrentShowComponent', () => {
  let component: CurrentShowComponent;
  let fixture: ComponentFixture<CurrentShowComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports:[HttpClientModule,
      RouterTestingModule],
      declarations: [ CurrentShowComponent ],
      providers:[ShowServiceFake],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service and populate the value of shows', 
  inject([ShowServiceFake],(service:ShowServiceFake) => {
   
    service.getShow('girls').subscribe( data =>{
      expect(data.name).toBe('girls');
    });
      
      

}));


});
