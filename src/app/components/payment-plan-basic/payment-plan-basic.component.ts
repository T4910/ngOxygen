import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormStateService } from '../../service/form-state.service';

@Component({
  selector: 'app-payment-plan-basic',
  imports: [],
  templateUrl: './payment-plan-basic.component.html',
  styleUrl: './payment-plan-basic.component.css'
})
export class PaymentPlanBasicComponent {
  formStateService = inject(FormStateService);
}
