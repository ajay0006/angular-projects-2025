import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { type TicketModel } from "./ticket/ticket.model";
import { Ticket } from './ticket/ticket';


@Component({
  selector: 'app-support-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './support-tickets.html',
  styleUrl: './support-tickets.css'
})
export class SupportTickets {
  tickets: TicketModel[] = []

  onAddNewTicket(ticketData: TicketModel) {
    let ticket: TicketModel
    console.log(ticketData, "support ticket data");
    
    ticket = { ...ticketData }
    this.tickets.push(ticket)
    console.log(this.tickets, "tickets");
  }

}
