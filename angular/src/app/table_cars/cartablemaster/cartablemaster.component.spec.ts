import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartablemasterComponent } from './cartablemaster.component';

describe('CartablemasterComponent', () => {
  let component: CartablemasterComponent;
  let fixture: ComponentFixture<CartablemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartablemasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartablemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
