import { Component, Input, input } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
  host: { class: 'dashboard-item' }
})
export class DashboardItem {
  // another way of using input, i am saying i am expecting the value to be an object
  // with key value pairs of src and alt
  // @Input({required: true}) image!: {src: string, alt: string}

  // Thi is the same thing i am doing Headers, only difference is i am specifying the type of data aka type definition
  //  i am expecting to receive in the <> that is an object of type image
  image = input.required<Image>()
  title = input.required<string>()

}
