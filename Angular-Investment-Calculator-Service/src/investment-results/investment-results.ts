import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentService } from './investment.service';
import { InvestmentResult } from '../models/investmentResult.model';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  // Component logic goes here
  protected readonly title = 'Investment Results';
  protected readonly results: InvestmentResult[] = []; // Placeholder for investment results data

  constructor(private investmentService: InvestmentService) {
    // Initialize results or fetch from a service
    // this.results = this.fetchResults();
    this.investmentService = this.investmentService;
  }

  // Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it


  get fetchResults() {
    // Simulate fetching results, replace with actual data fetching logic
    return this.investmentService.getResults();    
    // console.log(this.results, 'results in investment-results constructor');

  }

}
