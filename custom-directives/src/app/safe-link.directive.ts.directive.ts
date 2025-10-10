import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLinkDirectiveTs]', // all anchor elements that have this attribute on it would be active for it
  standalone: true,
  // binding, that when any onclick happens, this function should be activated
  host: {
    "(click)": "onConfirmLeavePage($event)"
  }
})
export class SafeLinkDirectiveTsDirective {
  queryParams = input('myApp');
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  constructor() {
    console.log("SafeLinkDirectiveTsDirective");
  }

  // method 1
  onConfirmLeavePage(event: MouseEvent) {
    const wants2Leave = window.confirm("Are you sure you want to leave this page?")

    if (wants2Leave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParams();
      return
    }

    event.preventDefault();
  }

  // method 2
    onConfirmLeavePageElementRef(event: MouseEvent) {
    const wants2Leave = window.confirm("Are you sure you want to leave this page?")

    if (wants2Leave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParams();
      return
    }

    event.preventDefault();
  }

}
