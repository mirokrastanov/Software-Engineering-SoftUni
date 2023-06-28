import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isActive = false;
  activeUsers = [
    { name: 'John', age: 21 },
    { name: 'Jill', age: 24 },
    { name: 'Jake', age: 17 },
    { name: 'Jackie', age: 19 },
  ];

  handleClick(): void {
    this.isActive = !this.isActive;
  }
}
