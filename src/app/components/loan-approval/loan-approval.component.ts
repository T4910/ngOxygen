import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormStateService } from '../../service/form-state.service';

@Component({
  selector: 'app-loan-approval',
  imports: [],
  templateUrl: './loan-approval.component.html',
  styleUrl: './loan-approval.component.css'
})
export class LoanApprovalComponent {
  termsAccepted = signal(false);
  router = inject(Router);
  formStateService = inject(FormStateService);
  loanData = this.formStateService.formData();

  onContinue() {
    console.log('heloo')
    if (this.termsAccepted()) {
      console.log('Terms accepted, proceeding...');
      this.router.navigateByUrl('/attest-video');
    } else {
      alert('Please accept the terms and conditions to continue.');
    }
  }

  onCheckboxChange() {
    console.log('Checkbox changed');
    this.termsAccepted.update(accepted => !accepted);
  }
}
