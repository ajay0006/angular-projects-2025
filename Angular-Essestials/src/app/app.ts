import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { test_users } from './test-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('essentials-starting-project');
  userLists = test_users;
  selectedUserId?: string;

  get selectedUser() {
    return this.userLists.find(user => user.id === this.selectedUserId)! || {id: '', name: '', avatar: ''};
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
} 
