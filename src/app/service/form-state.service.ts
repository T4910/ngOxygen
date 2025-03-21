import { Injectable, signal } from '@angular/core';

interface FormData {
  employer?: string;
  amount?: string;
  duration?: string;
  customerInfo: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    bvn?: string;
    ippiNumber?: string;
    stateOfOrigin?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  formData = signal<FormData>({
    employer: '',
    amount: '',
    duration: '',
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      bvn: '',
      ippiNumber: '',
      stateOfOrigin: ''
    }
  });

  displayData() {
    console.log('', this.formData());
  }

  constructor() { }
}
