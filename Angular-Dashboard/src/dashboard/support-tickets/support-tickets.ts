import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";

@Component({
  selector: 'app-support-tickets',
  imports: [NewTicket],
  templateUrl: './support-tickets.html',
  styleUrl: './support-tickets.css'
})
export class SupportTickets {

}
