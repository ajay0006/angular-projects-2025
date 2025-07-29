import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class Header {
    protected readonly title = signal('header-component');
}
