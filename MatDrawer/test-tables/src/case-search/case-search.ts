import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { CaseColumnSelector } from '../case-column-selector/case-column-selector';

@Component({
  selector: 'app-case-search',
  imports: [
    CaseColumnSelector,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    DatePipe,
],
  templateUrl: './case-search.html',
  styleUrl: './case-search.css'
})
export class CaseSearch {
  toggleFilterVisible() {
    // Implementation for toggling filter visibility
  }
}
