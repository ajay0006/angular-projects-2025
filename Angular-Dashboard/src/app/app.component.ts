import { Component } from '@angular/core';
import { Header } from '../header/header';
import { SupportTickets } from '../dashboard/support-tickets/support-tickets';
import { Traffic } from '../dashboard/traffic/traffic';
import { ServerStatus } from '../dashboard/server-status/server-status';
import { DashboardItem } from "../dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [Header, Traffic, SupportTickets, ServerStatus, DashboardItem]
})
export class AppComponent {

}
