import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStateService } from '../../service/form-state.service';
import { PaymentPlanBasicComponent } from '../payment-plan-basic/payment-plan-basic.component';
import { PaymentPlanDetailedComponent } from '../payment-plan-detailed/payment-plan-detailed.component';

@Component({
  selector: 'app-loan-form',
  imports: [PaymentPlanBasicComponent, PaymentPlanDetailedComponent, ReactiveFormsModule],
  templateUrl: './loan-form.component.html',
  styleUrl: './loan-form.component.css'
})
export class LoanFormComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  formStateService = inject(FormStateService);
  currentStep = signal(0);

  loanFormData = this.formBuilder.group({
    loanAmount: ['', [Validators.required, Validators.min(1)]],
    duration: ['', [Validators.required]],
    employer: ['', [Validators.required]],
  });

  nextStep() {
    this.currentStep.update((step) => step >= 2 ? step : step + 1);
  }

  prevStep() {
    this.currentStep.update((step) => step <= 0 ? step : step - 1);
  }

  reset() {
    this.currentStep.set(0);
  }

  submitForm() {
    if(!this.loanFormData.valid) return
    
    if(this.currentStep() < 2){ 
      this.nextStep();
    } else {
      this.formStateService.displayData();
      this.router.navigateByUrl('/customer-info');
    }


    this.formStateService.formData.update((data) => ({
        ...data,
        employer: this.loanFormData.value.employer ?? '',
        amount: this.loanFormData.value.loanAmount ?? '',
        duration: this.loanFormData.value.duration ?? '',
      })
    );
  }
}
