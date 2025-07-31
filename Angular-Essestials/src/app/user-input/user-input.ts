import { Component, EventEmitter, Input, Output } from '@angular/core';
type User =  { 
    id: string;
    name: string;
    avatar: string
   } 

@Component({
  selector: 'app-userInput',
  imports: [],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  @Input({ required: true }) user: User = { id: '', name: '', avatar: '' };

  @Output() userSelected = new EventEmitter();

  get imgPath() {
    return `assets/users/${this.user.avatar}`;
  }

  onClick() {
    this.userSelected.emit(this.user.id);
  }
}
