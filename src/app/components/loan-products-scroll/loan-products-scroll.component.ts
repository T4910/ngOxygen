import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface LoanProduct {
  id: number;
  title: string;
  description: string;
  buttonVariant: string;
}

@Component({
  selector: 'app-loan-products-scroll',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './loan-products-scroll.component.html',
  styleUrl: './loan-products-scroll.component.css'
})
export class LoanProductsScrollComponent {
  public loanProducts = signal<LoanProduct[]>( [
    {
      id: 1,
      title: 'Salary Loan',
      description: 'Oxygen Salary Loan offers quick financial access to salary earners. Borrow between N50,000 and N5,000,000 with flexible repayment tenure of up to 12 months. Interest rate competitive. Repayment through salary account.',
      buttonVariant: 'white',
    },
    {
      id: 2,
      title: 'Corper Loan',
      description: 'Oxygen Salary Loan offers quick financial access to corpers. Borrow between N50,000 and N500,000 with flexible repayment tenure of up to 12 months. Interest rate competitive. Repayment through salary account.',
      buttonVariant: 'blue',
    },
    // You can add more loan products as needed
  ]);
}
