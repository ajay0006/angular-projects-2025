import { Component } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { Formcontrol } from "../../../shared/formcontrol/formcontrol";

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Formcontrol],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicket {

}
