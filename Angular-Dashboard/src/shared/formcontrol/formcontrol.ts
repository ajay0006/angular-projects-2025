import { Component, Host, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-formcontrol',
  imports: [],
  templateUrl: './formcontrol.html',
  styleUrl: './formcontrol.css',
  encapsulation: ViewEncapsulation.None,
  // this will add the values specified here as pptys on the host element
  // in this case i am adding the style class 'control', which is equivalent to me
  // going into the html file and adding the class 'control' to the new-tickethost element
  host: { class: 'control' }
})
export class Formcontrol {

}
