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

  it('should call the service and populate the details of show', 
  inject([ShowServiceFake],(service:ShowServiceFake) => {
   
    service.getShow('girls').subscribe( data =>{
      expect(data.name).toBe('girls');
    });
      
      

}));


});
