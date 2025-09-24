import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css'
})
export class ServerStatus implements OnInit {
  currentStatus: "online" | "offline" | "unknown" = 'offline';

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd >= 0.8 && rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 30000);
  }
}
