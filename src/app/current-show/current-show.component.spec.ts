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

  it('should call the ', () => {
    expect(component).toBeTruthy();
  });
  
  it('it should call the getShowData ', () => {
    expect(component.getShowData).toBeTruthy();
  });
  

it('should call service and populate the value of shows', 
  inject([ShowServiceFake],(service:ShowServiceFake) => {
    service.getShowMapData('girls').subscribe( data =>{
      expect(data[0].name).toBe('girls');
      expect(data[0].name).not.toBe('family');
      expect(data[0].type).toBe('scripted');
      expect(data[0].type).not.toBe('other');
      expect(data[0].language).toBe('English');
      expect(data[0].language).not.toBe('other');
      expect(data[0].genres[0]).toBe('Drama');
      expect(data[0].genres[0]).not.toBe('other');
      expect(data[0].status).toBe('Ended');
      expect(data[0].status).not.toBe('Running');
      expect(data[0].schedule.time).toBe('22.00');
      expect(data[0].schedule.time).not.toBe('23.00');
      expect(data[0].schedule.days).toBe('monday');
      expect(data[0].schedule.days).not.toBe('sunday');
      expect(data[0].rating.average).toBe('8.7');
      expect(data[0].rating.average).not.toBe('8.9');
    });
      
}));


});
