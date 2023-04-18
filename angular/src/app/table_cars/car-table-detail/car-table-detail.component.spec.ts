import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTableDetailComponent } from './car-table-detail.component';

describe('CarTableDetailComponent', () => {
  let component: CarTableDetailComponent;
  let fixture: ComponentFixture<CarTableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTableDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
