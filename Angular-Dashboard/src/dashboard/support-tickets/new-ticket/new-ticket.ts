import { Component } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { Formcontrol } from "../../../shared/formcontrol/formcontrol";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Formcontrol, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicket {

  onSubmit() {
    
  }

}
