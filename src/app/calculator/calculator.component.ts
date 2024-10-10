import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedRetrun = '5';
  duration = '10';

  onSubmit() {
    console.log('Submited');
    console.log(this.annualInvestment);
    console.log(this.initialInvestment);
    console.log(this.expectedRetrun);
    console.log(this.duration);
  }
}
