import { Component, input } from '@angular/core';
import { TicketModel } from './ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css'
})
export class Ticket {

  ticketData = input.required<TicketModel>();
}
