import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-calculator-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './calculator-result.component.html',
  styleUrl: './calculator-result.component.css',
})
export class CalculatorResultComponent {
  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultsData;
  }
}
