import { Component, signal } from '@angular/core';
import { Header } from "../header/header";
import { InvestmentResults } from '../investment-results/investment-results';
import { UserInput } from '../user-input/user-input';
import { type Investment_Object } from '../models/investment.model';
import { type InvestmentResult } from '../models/investmentResult.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, UserInput, InvestmentResults]
})
export class App {
  protected readonly title = signal('Angular-Investment-Calculator');
  resultsArray = signal<InvestmentResult[]>([]);
  // resultsArray = signal<InvestmentResult | undefined>(undefined);

  private results: InvestmentResult = {
    year: 0,
    investmentValue: 0,
    interest: 0,
    totalInterest: 0,
    investedCapital: 0,
    annualInvestment: 0,
  };


  calculateInvestmentResults(investment: Investment_Object) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = investment;
    const annualData = [];
    let investmentValue = +initialInvestment;

    for (let i = 0; i < +duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (+expectedReturn / 100);
      investmentValue += interestEarnedInYear + +annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.results = ({
        year: year,
        investmentValue: investmentValue,
        interest: interestEarnedInYear,
        totalInterest: totalInterest,
        investedCapital: initialInvestment + annualInvestment * year,
        annualInvestment: annualInvestment,
      });

      annualData.push({ ...this.results });
      // this.resultsArray = annualData;
      this.resultsArray.set(annualData);
    }
  }
}
