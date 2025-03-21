import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPlanBasicComponent } from './payment-plan-basic.component';

describe('PaymentPlanBasicComponent', () => {
  let component: PaymentPlanBasicComponent;
  let fixture: ComponentFixture<PaymentPlanBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentPlanBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPlanBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
