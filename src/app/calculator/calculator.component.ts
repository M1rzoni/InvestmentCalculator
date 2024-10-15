import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type CalculatorModule } from './calculator.model';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  @Output() calculate = new EventEmitter<CalculatorModule>();

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedRetrun = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calcualteInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedRetrun(),
      annualInvestment: +this.annualInvestment(),
    });

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedRetrun.set('5');
    this.duration.set('10');
  }
}
