import { Component } from '@angular/core';
import { list } from './data/list';
import { IList } from './data/list.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular test';
  list: IList = list;

  filterList(type: string): void {
    this.list.data = this.list.data.filter((item) => item.type === type);
  }
}
