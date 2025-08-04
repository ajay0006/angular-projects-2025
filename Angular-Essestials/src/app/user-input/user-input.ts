import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from '../../models/user.model';


@Component({
  selector: 'app-userInput',
  imports: [],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  @Input({ required: true }) user: User = { id: '', name: '', avatar: '' };
  @Input() selectedCSS?: boolean;

  @Output() userSelected = new EventEmitter();

  get imgPath() {
    return `assets/users/${this.user.avatar}`;
  }

  onClick() {
    this.userSelected.emit(this.user.id);
  }
}
