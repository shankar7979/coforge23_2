import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() valueChange = new EventEmitter();
  Counter = 0;

  valueChanged() { // You can give any function name
    this.Counter = this.Counter + 1;
    this.valueChange.emit(this.Counter);
  }
}
