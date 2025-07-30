// Using signals
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user-signals.html',
  styleUrl: './user-signals.css'
})
export class UserSignals {
  avatarSignal = input.required<string>();
  nameSignal = input.required<string>();

  imgPath = computed(() => `assets/users/${this.avatarSignal()}`);

  onClick() {
  }
}
 