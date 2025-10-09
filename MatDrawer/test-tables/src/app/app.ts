import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaseSearch } from '../case-search/case-search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CaseSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-tables');
}
