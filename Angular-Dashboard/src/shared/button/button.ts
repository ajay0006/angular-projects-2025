import { Component } from '@angular/core';

@Component({
  /*  attribute selector
  i am telling angular that any button element in my application that also has the appButton attribute 
    on it should be controlled by this component */
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

}
