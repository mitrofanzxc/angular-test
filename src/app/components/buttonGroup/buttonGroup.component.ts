import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './buttonGroup.component.html',
})
export class ButtonGroupComponent {
  @Input() filterList: (type: string) => void;
}
