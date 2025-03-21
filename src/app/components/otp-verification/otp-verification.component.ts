import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormStateService } from '../../service/form-state.service';
import { SuccessComponentComponent } from "../success-component/success-component.component";

@Component({
  selector: 'app-otp-verification',
  imports: [SuccessComponentComponent],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.css'
})
export class OtpVerificationComponent {
  verified = signal<boolean>(false);
  loading = signal<boolean>(false);
  active = signal(0);
  otp = signal<string[]>(Array(6).fill(''));
  formState = inject(FormStateService);
  email = this.formState.formData().customerInfo.email;

  handleKeyDown(e: Event, index: number) {
    // if (e.key === 'Backspace' && !this.otp[index] && index > 0) {
    //   this.inputRefs[index - 1]?.focus();
    // }
    console.log('aa', index, ((e.target as HTMLInputElement).nextElementSibling as HTMLInputElement)?.id);
    ((e.target as HTMLInputElement).nextElementSibling as HTMLInputElement)?.focus();
    this.active.set(index + 1);
  }

  handlePaste(e: ClipboardEvent) {
    e.preventDefault();
    const pastedData = e.clipboardData?.getData('text/plain') || '';
    // Only process if it looks like an OTP (digits only)
    if (!/^\d+$/.test(pastedData)) return;
    // Fill the OTP fields with pasted characters
    const newOtp = [...this.otp()];
    for (let i = 0; i < Math.min(pastedData.length, 6); i++) {
      newOtp[i] = pastedData[i];
    }
    this.otp.set(newOtp);
    // Focus the appropriate field
    // const focusIndex = Math.min(pastedData.length, 5);
    // this.inputRefs[focusIndex]?.focus();
  }

  handleSubmit(){
    console.log('submitting otp', this.otp());
    // const otpString = this.otp().join('');

    this.loading.set(true);
    
    setTimeout(() => {
      this.verified.set(true);
      this.loading.set(false);
    }, 3000);
  }
}

/** 
 * "use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { LoanFormData } from "../types"
import { useState } from "react"

interface VerificationProps {
  onNext: (data: Partial<LoanFormData>) => void
  email?: string
}

export function Verification({ onNext, email = "michael.ashefor@gmail.com" }: VerificationProps) {
  const [code, setCode] = useState<string[]>(Array(6).fill(""))

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ verificationCode: code.join("") })
  }

 */