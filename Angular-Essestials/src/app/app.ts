import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserSignals } from './user-signals/user-signals';
import { UserInput } from './user-input/user-input';
import { test_users } from './test-users';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, UserSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('essentials-starting-project');
  userLists = test_users;
}
