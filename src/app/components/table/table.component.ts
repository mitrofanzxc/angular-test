import { Component, Input } from '@angular/core';
import { IList } from '../../data/list.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  // filterList(type: string): void {
  //   this.list.data.filter((item) => item.type === type);
  //   console.log('click');
  //   console.log(this.list);
  // }

  @Input() list: IList = { total: 0, data: [] };
  // @Input() listOfButtons: string[] = [];
}
