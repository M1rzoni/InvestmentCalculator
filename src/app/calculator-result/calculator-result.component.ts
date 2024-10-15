import { CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-calculator-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './calculator-result.component.html',
  styleUrl: './calculator-result.component.css',
})
export class CalculatorResultComponent {
  //results = input();
  @Input({ required: true }) results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
