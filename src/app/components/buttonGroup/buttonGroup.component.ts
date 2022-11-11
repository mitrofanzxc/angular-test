import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './buttonGroup.component.html',
})
export class ButtonGroupComponent {
  @Input() filterValue: string = '';

  // filterValueHandler()
}
