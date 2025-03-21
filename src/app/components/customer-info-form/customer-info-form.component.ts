import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStateService } from '../../service/form-state.service';
import { StepProgressCircleComponent } from '../step-progress-circle/step-progress-circle.component';

@Component({
  selector: 'app-customer-info-form',
  imports: [ReactiveFormsModule, StepProgressCircleComponent],
  templateUrl: './customer-info-form.component.html',
  styleUrl: './customer-info-form.component.css'
})
export class CustomerInfoFormComponent {
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  formStateService = inject(FormStateService);
  currentStep = signal(0);

  customerForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
    bvn: ['', [Validators.required, Validators.minLength(11)]],
    ippiNumber: ['', [Validators.required, Validators.minLength(11)]],
    stateOfOrigin: ['', [Validators.required]]
  });

  nextStep() {
    this.currentStep.update((step) => step >= 1 ? step : step + 1);
  }

  prevStep() {
    console.log('prev set')
    this.currentStep.update((step) => step <= 0 ? step : step - 1);
  }
  
  reset() {
    this.currentStep.set(0);
  }
  
  onSubmit() {
    console.log('aubmit', this.customerForm.value);
    
    if(this.currentStep() < 1){ 
      const firstFormValid = this.customerForm.controls['firstName'].valid && this.customerForm.controls['lastName'].valid && this.customerForm.controls['email'].valid && this.customerForm.controls['phoneNumber'].valid;
    
    if(!firstFormValid && this.currentStep() === 0) return
    
    this.nextStep();
  } else {
    if(!this.customerForm.valid) return
    
    this.formStateService.formData.update((data) => ({
      ...data,
      customerInfo: {
        firstName: this.customerForm.value.firstName ?? '',
        lastName: this.customerForm.value.lastName ?? '',
        email: this.customerForm.value.email ?? '',
        phoneNumber: this.customerForm.value.phoneNumber ?? '',
        bvn: this.customerForm.value.bvn ?? '',
        ippiNumber: this.customerForm.value.ippiNumber ?? '',
        stateOfOrigin: this.customerForm.value.stateOfOrigin ?? ''
      }
    }));

    this.router.navigateByUrl('/one-time-password');

    this.formStateService.displayData();
  }
}

}
