// Using signals
import { Component, computed, input, output} from '@angular/core';

@Component({
  selector: 'app-user-signals',
  imports: [],
  templateUrl: './user-signals.html',
  styleUrl: './user-signals.css'
})
export class UserSignals {
  idSignal = input.required<string>();
  avatarSignal = input.required<string>();
  nameSignal = input.required<string>();

  userSelected = output<string>();
  // userSelected = output<{ id: string; avatar: string; name: string }>();

  imgPath = computed(() => `assets/users/${this.avatarSignal()}`);

  onClick() {
    this.userSelected.emit(this.idSignal());
  }
}
 