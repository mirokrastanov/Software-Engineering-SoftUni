import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // interpolation: ['<<<', '>>>'],
})
export class ListComponent {
  users = [
    { firstName: 'Ivan', lastName: 'Petrov' },
    { firstName: 'Pesho', lastName: 'Georgiev' },
  ];

  showLastName = true;

  handleClickEvent(event: MouseEvent) {
    console.log(event);
    this.showLastName = !this.showLastName;
  }

  constructor() {}
}
