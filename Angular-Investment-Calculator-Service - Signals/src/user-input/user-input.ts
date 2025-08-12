import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment_Object } from '../models/investment.model';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrls: ['./user-input.css']
})
export class UserInput {
  investmentObj: Investment_Object = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };

  private investmentService = inject(InvestmentService);

//   constructor() {
//   if(localStorage.getItem("investmentInput")) {

//     this.investmentObj = JSON.parse(localStorage.getItem("investmentInput") || '{}');
//   }
// }
  submitInvestmentForm() {
    this.investmentService.calculateInvestmentResults(this.investmentObj);
    // localStorage.setItem("investmentInput", JSON.stringify(this.investmentObj));
  }
}

