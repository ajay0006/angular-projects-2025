import { Component, signal } from '@angular/core';
import { HeaderSignals } from "./header-signals/header-signals";
import { UserSignals } from "./user-signals/user-signals";
import { TasksSignals } from './tasks-signals/tasks-signals';
import { test_users } from './test-users';

@Component({
  selector: 'app-root-signals',
  imports: [ HeaderSignals, UserSignals, TasksSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Essentials-Signal');
  userLists = signal(test_users);
  selectedUserId = signal<string | null>(null);

  onSelectedUser(id: string) {
    this.selectedUserId.set(id);
  }
}
