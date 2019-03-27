import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

import { ShowDetailComponent } from './show-detail.component';
import { ShowService } from '../show.service';
import { ShowServiceFake } from '../show.service.fake';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule],
      declarations: [ ShowDetailComponent ],
      
      //  useclass:ShowServiceFake}],
    })
    .compileComponents();
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

 /* it('search field validity', () => {
  
  const fixture = TestBed.createComponent(ShowDetailComponent);
  fixture.detectChanges();
  const app = fixture.debugElement.componentInstance;
  const el = fixture.nativeElement.querySelector('input');
  expect(app.e1).toBeTruthy();

 // el.dispatchEvent(new Event('input'));
  
 // fixture.detectChanges();
 // fixture.whenStable().then(() => {
  //  expect(app.data).toBe('newvalue');
});
  })*/

 

  });
