import { Component } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';

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

  selectedUserIndex: null | number = null;

  get showSelectedIndex(): boolean {
    return (this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >= 0;
  }

  listItemClickHandler(index: number) {
    if (this.selectedUserIndex == index) {
      this.selectedUserIndex = null;
      return;
    }
    this.selectedUserIndex = index;
  }

  customEventHandler($event: ICustomEvent) { // coming from the @Output in list-item
    console.log($event);
  }

  constructor() { }
}
