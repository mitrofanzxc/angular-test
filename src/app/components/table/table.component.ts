import { Component, Input } from '@angular/core';
import { IList } from '../../data/list.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() list: IList = { total: 0, data: [] };
}
