import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userInput',
  imports: [],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imgPath() {
    return `assets/users/${this.avatar}`;
  }

  onClick() {
  }
}
