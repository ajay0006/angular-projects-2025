import { Component, input, signal, output } from '@angular/core';
import { TicketModel } from './ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css'
})
export class Ticket {

  ticketData = input.required<TicketModel>();
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    // thi can be used to update the values in a signal
    this.detailsVisible.update((isVisible) => !isVisible);
  }

  onMarkAsCompleted() {
    this.close.emit()
  }
}
