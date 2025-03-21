import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPlanDetailedComponent } from './payment-plan-detailed.component';

describe('PaymentPlanDetailedComponent', () => {
  let component: PaymentPlanDetailedComponent;
  let fixture: ComponentFixture<PaymentPlanDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentPlanDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPlanDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
