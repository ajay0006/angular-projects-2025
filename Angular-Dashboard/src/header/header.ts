import { Component } from '@angular/core';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-header',
  // i have to import the button coomponent otherwisse it would silently fail
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
