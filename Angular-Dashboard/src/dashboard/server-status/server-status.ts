import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css'
})
export class ServerStatus implements OnInit, OnDestroy {
  currentStatus: "online" | "offline" | "unknown" = 'offline';
  private interval?: ReturnType<typeof setInterval>;
  // this is an alternative to using the aboove method on line 12 & using the ngOnDestroy
  private destroyRef = inject(DestroyRef)

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd >= 0.8 && rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 30000);

    // either you use this method or you usse the ngOnDestroy
    this.destroyRef.onDestroy(() => {
      clearInterval(this.interval)
    })
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval)
  }
}
