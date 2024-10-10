import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();

  initialInvestment = '0';
  annualInvestment = '0';
  expectedRetrun = '5';
  duration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedRetrun,
      annualInvestment: +this.annualInvestment,
    });
  }
}
