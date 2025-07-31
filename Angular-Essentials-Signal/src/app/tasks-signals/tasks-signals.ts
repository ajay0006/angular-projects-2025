import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-signals',
  imports: [],
  templateUrl: './tasks-signals.html',
  styleUrl: './tasks-signals.css'
})
export class TasksSignals {
  @Input({ required: true }) name!: string;

}
