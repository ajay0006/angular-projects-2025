import { Component, input } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css'
})
export class DashboardItem {
  image = input.required<Image>()
  title = input.required<string>()

}
