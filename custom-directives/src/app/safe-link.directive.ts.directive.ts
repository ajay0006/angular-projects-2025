import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLinkDirectiveTs]', // all anchor elements that have this attribute on it would be active for it
  standalone: true
})
export class SafeLinkDirectiveTsDirective {

  constructor() { 
    console.log("SafeLinkDirectiveTsDirective");
  }

}
