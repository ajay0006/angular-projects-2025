import { Component, signal } from '@angular/core';
import { Header } from "../header/header";
import { InvestmentResults } from '../investment-results/investment-results';
import { UserInput } from '../user-input/user-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, UserInput, InvestmentResults]
})
export class App {
  protected readonly title = signal('Angular-Investment-Calculator');
}
