import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorModule } from './calculator/calculator.model';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CalculatorComponent, CalculatorResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
