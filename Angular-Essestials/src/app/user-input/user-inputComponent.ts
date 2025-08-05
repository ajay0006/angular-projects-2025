import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from '../../models/user.model';
import { CardComponent } from "../shared/card/cardComponent";


@Component({
  selector: 'app-userInput',
  imports: [CardComponent],
  templateUrl: './user-inputComponent.html',
  styleUrl: './user-inputComponent.css'
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
