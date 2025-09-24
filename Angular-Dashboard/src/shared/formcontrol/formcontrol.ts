import { Component, Host, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-formcontrol',
  imports: [],
  templateUrl: './formcontrol.html',
  styleUrl: './formcontrol.css',
  /* this disables the style being scoped it its component, that means that the forControl.css will 
   be scoped to the global host 
   */
  encapsulation: ViewEncapsulation.None,
  /* this will add the values specified here as pptys on the host element
  in this case i am adding the style class 'control', which is equivalent to me
  going into the html file and adding the class 'control' to the new-tickethost element 
  */
  host: {
    class: 'control',
    'click': 'onClick()',
  }
})
export class Formcontrol {
  onClick() {
    console.log('clicked');
  }
}
