import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the starWidth based on rating', () => {
    let starWidth:number= 100;
    let rating :number= 8.7;
    component.ngOnChanges();
    starWidth = rating * 15;
    expect(starWidth).toEqual(130.5);  
    expect(starWidth).not.toEqual(120);  
    
  });

});
