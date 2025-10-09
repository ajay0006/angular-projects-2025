import { Component, input, output } from '@angular/core';
import { sizeModel } from './sizeModel';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {

  size = input.required<sizeModel>()
  sizeChange = output<sizeModel>()


  onReset() {
    this.sizeChange.emit({
      width: '200',
      height: '100',
    })
  }
}
