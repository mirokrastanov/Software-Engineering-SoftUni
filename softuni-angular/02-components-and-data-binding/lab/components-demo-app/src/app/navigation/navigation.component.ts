import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnChanges {
  @Input('title2') titleFromApp: string = '';
  @Input('activeUsers') data: { name: string; age: number }[] = [];
  @Output() onTestOutput = new EventEmitter<boolean>();

  isActive = false;

  inputValue = 'hello';

  ngOnInit() {
    console.log('Nav initialized!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  handleClick(): void {
    this.isActive = !this.isActive;
    this.onTestOutput.emit(this.isActive);
  }
}
