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
  filterValue: string = 'income';

  filterList(): void {
    this.list.data = this.list.data.filter(
      (item) => item.type === this.filterValue
    );
    console.log('click');
    console.log(this.list);
  }
}
