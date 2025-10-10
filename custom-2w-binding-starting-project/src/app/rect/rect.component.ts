import { Component, input, model, output } from '@angular/core';
import { sizeModel } from './sizeModel';

@Component({
    selector: 'app-rect',
    imports: [],
    templateUrl: './rect.component.html',
    styleUrl: './rect.component.css'
})
export class RectComponent {

  // 2 way binding the old way

  sizeOldWay = input.required<sizeModel>()
  sizeOldWayChange = output<sizeModel>()

  // 2 way binding the new way

  sizeNewWay = model.required<sizeModel>()


  onResetOldWay() {
    this.sizeOldWayChange.emit({
      width: '200',
      height: '100',
    })
  }

  onResetNewWay() {
    this.sizeNewWay.set({
      width: '200',
      height: '100',
    })
  }
}
