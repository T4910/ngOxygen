import { Routes } from '@angular/router';
import { CustomerInfoFormComponent } from './components/customer-info-form/customer-info-form.component';
import { LoanApprovalComponent } from './components/loan-approval/loan-approval.component';
import { LoanFormComponent } from './components/loan-form/loan-form.component';
import { LoanProductsScrollComponent } from './components/loan-products-scroll/loan-products-scroll.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { VideoAttestationComponent } from './components/video-attestation/video-attestation.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: LoanProductsScrollComponent },
    { path: 'one-time-password', component: OtpVerificationComponent },
    { path: 'application-approval', component: LoanApprovalComponent },
    { path: 'attest-video', component: VideoAttestationComponent },
    { path: 'customer-info', component: CustomerInfoFormComponent },
    { path: 'get-loan-form', component: LoanFormComponent },
    { path: '**', redirectTo: '/home' }
];
