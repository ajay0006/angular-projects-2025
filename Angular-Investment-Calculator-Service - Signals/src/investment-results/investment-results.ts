import { Component, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  protected readonly title = 'Investment Results';

  constructor(private investmentService: InvestmentService) {
    this.investmentService = this.investmentService;
  }

  // private investmentService = inject(InvestmentService);

  // returns the readonly investment results, this is simillar to creating a private readonly property and assigning the data to it from within a constructor
  results = computed(() => this.investmentService.getResults());

  // or

  // results = this.investmentService.getResults.asReadonly();

}
