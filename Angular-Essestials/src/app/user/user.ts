import { Component, signal } from '@angular/core';
import { test_users } from '../test-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = test_users[Math.floor(Math.random() * test_users.length)];
  selectedUserSignal = signal(this.selectedUser);

  get imgPath() {
    return `assets/users/${this.selectedUserSignal().avatar}`;
  }

  onClick() {
    this.selectedUserSignal.set(test_users[Math.floor(Math.random() * test_users.length)]);
    console.log(`Selected user: ${this.selectedUserSignal().name}`);
    
  }
}
