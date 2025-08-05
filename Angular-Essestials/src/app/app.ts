import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { test_users } from './test-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, TasksComponent],
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
