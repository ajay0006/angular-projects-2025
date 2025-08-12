import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Investment_Object } from '../models/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrls: ['./user-input.css']
})
export class UserInput {
  calculate = output<Investment_Object>();
  investmentObj = signal<Investment_Object>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });  
  
  submitInvestmentForm() {
    this.calculate.emit(this.investmentObj());
    this.investmentObj.set({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    });
  }
}

