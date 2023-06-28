import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Title from app component';

  users = [
    { name: 'John', age: 21 },
    { name: 'Jill', age: 24 },
    { name: 'Jake', age: 17 },
    { name: 'Jackie', age: 20 },
  ];

  onNavOutput(): void {
    console.log('out from child NAV');
  }
}
