import { Component, output, input } from '@angular/core';
import { DatePipe, SlicePipe } from '@angular/common';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { SACaseDetailDTO, T2CaseDetailDTO } from '../models';
import { Router } from '@angular/router';
import { CaseDataService } from '../case-data.service';

@Component({
  selector: 'app-case-search-slide-out',
  imports: [DatePipe, MatCard, MatCardTitle, MatButtonModule, MatDividerModule, MatIcon],
  templateUrl: './case-search-slide-out.html',
  styleUrl: './case-search-slide-out.css'
})
export class CaseSearchSlideOut {
  public slideOutData!: any;
  public displayT2Slideout: boolean = false;
  public displaySASlideout: boolean = false;
  closeDrawer = output();

  caseNumber = input<string>()

  constructor(
    private readonly router: Router,
    private readonly caseDataService: CaseDataService
  ) {}

  private getExternalCase(caseNumber: string) {
    this.caseDataService.getCaseData(caseNumber).subscribe((data: any) => {
      this.slideOutData = data;
      this.displayT2Slideout = data?.t2CaseDetailDTO != null;
      this.displaySASlideout = data?.saCaseDetailDTO != null;
    });
  }

  onClickViewActivitySummary() {
    this.router.navigate([`externalCase/activity-summary/${this.caseNumber}`]);
  }
}
