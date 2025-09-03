import { Component, input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvestmentResult } from '../models/investmentResult.model';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {

  // communication from parent component to child component

  resultsArray = input<InvestmentResult[]>();

  // @Input() resultsArray?: InvestmentResult[] = [];



}
