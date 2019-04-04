import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ShowDataComponent } from './show-data.component';
import { StarComponent } from '../shared/star.component';
import { ShowServiceFake } from '../show.service.fake';



describe('ShowDataComponent', () => {
  let component: ShowDataComponent;
  let fixture: ComponentFixture<ShowDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    
      imports:[RouterTestingModule,HttpClientModule],
      declarations: [ ShowDataComponent,StarComponent ],
      providers:[ShowServiceFake],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getShowData function should be defined',() => {
   
    expect(component.getShowData("girls")).toBeDefined;
  });

  it('should call the service and populate the details of show', 
  inject([ShowServiceFake],(service:ShowServiceFake) => {
   
    service.getShow('girls').subscribe( data =>{
      expect(data.name).toBe('girls');
      expect(data.name).not.toBe('family');
      expect(data.type).toBe('scripted');
      expect(data.type).not.toBe('other');
      expect(data.language).toBe('English');
      expect(data.language).not.toBe('other');
      expect(data.genres[0]).toBe('Drama');
      expect(data.genres[0]).not.toBe('other');
      expect(data.status).toBe('Ended');
      expect(data.status).not.toBe('Running');
      expect(data.schedule.time).toBe('22.00');
      expect(data.schedule.time).not.toBe('23.00');
      expect(data.schedule.days).toBe('monday');
      expect(data.schedule.days).not.toBe('sunday');
      expect(data.rating.average).toBe('8.7');
      expect(data.rating.average).not.toBe('8.9');
  
    });
      
      

}));


});
