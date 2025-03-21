import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductsScrollComponent } from './loan-products-scroll.component';

describe('LoanProductsScrollComponent', () => {
  let component: LoanProductsScrollComponent;
  let fixture: ComponentFixture<LoanProductsScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanProductsScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanProductsScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
