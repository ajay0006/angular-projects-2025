import { Component } from '@angular/core';
import { SafeLinkDirectiveTsDirective } from "../safe-link.directive.ts.directive";

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDirectiveTsDirective],
})
export class LearningResourcesComponent {}
