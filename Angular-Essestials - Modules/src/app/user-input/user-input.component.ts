import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from '../../models/user.model';


@Component({
  selector: 'app-userInput',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
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
