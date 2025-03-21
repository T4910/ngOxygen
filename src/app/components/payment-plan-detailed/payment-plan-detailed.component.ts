import { Component, inject } from '@angular/core';
import { FormStateService } from '../../service/form-state.service';

@Component({
  selector: 'app-payment-plan-detailed',
  imports: [],
  templateUrl: './payment-plan-detailed.component.html',
  styleUrl: './payment-plan-detailed.component.css'
})
export class PaymentPlanDetailedComponent {
  formStateService = inject(FormStateService);
  data = this.formStateService.formData()
}
