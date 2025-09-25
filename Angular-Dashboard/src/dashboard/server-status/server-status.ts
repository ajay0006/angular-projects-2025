import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css'
})
export class ServerStatus implements OnInit, OnDestroy {
  currentStatus = signal<"online" | "offline" | "unknown">('offline');
  private interval?: ReturnType<typeof setInterval>;
  // this is an alternative to using the aboove method on line 12 & using the ngOnDestroy
  private destroyRef = inject(DestroyRef)

  /*
when using signals in the template file, angualr automatically subscribess to it, i.e it watches for any changes and refreshes the component
but it doesnt do that when using the signal in the component file, so we have to manually subscribe to it
we do this by using the effect method from the angular core library
  */
  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    })
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd >= 0.8 && rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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
