import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddByVinComponent } from './add-by-vin.component';

describe('AddByVinComponent', () => {
  let component: AddByVinComponent;
  let fixture: ComponentFixture<AddByVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddByVinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddByVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
