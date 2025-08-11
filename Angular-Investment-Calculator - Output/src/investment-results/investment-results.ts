import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvestmentResult } from '../models/investmentResult.model';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {

  @Input() resultsArray?: InvestmentResult[] = [];



}
