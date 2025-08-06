import { Component, signal } from '@angular/core';
import { test_users } from './test-users';

@Component({
  selector: 'app-root',
  standalone: false,
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
