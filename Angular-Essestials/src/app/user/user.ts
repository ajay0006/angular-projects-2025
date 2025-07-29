import { Component } from '@angular/core';
import { test_users } from '../test-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = test_users[Math.floor(Math.random() * test_users.length)];
}
