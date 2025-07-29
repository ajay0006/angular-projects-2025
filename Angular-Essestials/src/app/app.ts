import { Component, signal } from '@angular/core';
//importing the header component
import { Header } from "../header/header";

@Component({
  selector: 'app-root',
// using the imported header component as an import, that way the app component can use it aas its child
// component
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('essentials-starting-project');
}
