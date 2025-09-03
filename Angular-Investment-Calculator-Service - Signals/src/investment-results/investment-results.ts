import { Component, computed, ViewChild } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvestmentService } from './investment.service';
import { MatDrawerMode, MatSidenavModule, MatSidenav } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';
import {ConfigurableFocusTrapFactory, FocusTrapFactory} from '@angular/cdk/a11y';
import { FormControl, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-investment-results',
  imports: [CommonModule, CurrencyPipe, MatSidenavModule, MatButtonModule,FormsModule],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
  providers: [{provide: ConfigurableFocusTrapFactory, useClass: FocusTrapFactory}]
})
export class InvestmentResults {
  protected readonly title = 'Investment Results';
  mode = new FormControl<MatDrawerMode>('push');
  hasBackdrop = new FormControl<boolean>(true);
  position = new FormControl<'start' | 'end'>('end');
  @ViewChild('startSidenav') sidenav!: MatSidenav;

  // toggle = () => {
  //   this.sidenav.toggle();
  // }

  constructor(private investmentService: InvestmentService) {
    this.investmentService = this.investmentService;
  }

  // private investmentService = inject(InvestmentService);

  // returns the readonly investment results, this is simillar to creating a private readonly property and assigning the data to it from within a constructor
  results = computed(() => this.investmentService.getResults());

  // ngAfterViewInit() {
  //   this.sidenav.toggle();
  // }

  // or

  // results = this.investmentService.getResults.asReadonly();

}
