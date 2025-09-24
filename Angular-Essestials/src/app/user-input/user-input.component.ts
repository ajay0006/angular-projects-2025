import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from '../../models/user.model';
import { type test } from '../../models/test';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-userInput',
  imports: [CardComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input({ required: true }) user: User = { id: '', name: '', avatar: '' };
  @Input() selectedCSS?: boolean;

  @Output() userSelected = new EventEmitter();

  testData = <test[]>[
    { id: '1', userId: '1', title: 'Test Title 1', summary: 'Test Summary 1', dueDate: '2023-12-31' },
    { id: '2', userId: '2', title: 'Test Title 2', summary: 'Test Summary 2', dueDate: '2024-01-15' },
    { id: '3', userId: '3', title: 'Test Title 3', summary: 'Test Summary 3', dueDate: '2024-02-20' }
  ];

  get imgPath() {
    return `assets/users/${this.user.avatar}`;
  }

  onClick() {
    this.userSelected.emit(this.user.id);
  }
}
