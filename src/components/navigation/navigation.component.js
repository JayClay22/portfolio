import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: 'dist/html/navigation.html'
})

export class NavigationComponent {
      name = 'Jordan Clay';
      link = 'http://madnesslabs.net';
      test() {
        alert('Hello Me');
      }
}