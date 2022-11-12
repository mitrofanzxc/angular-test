import { Component, OnInit } from '@angular/core';
import { ListService } from './../../services/list.service';
import { IList } from './../../data/list.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  list: IList = { total: 0, data: [] };

  constructor(private listService: ListService) {}

  getList(): void {
    this.listService.getList().subscribe((list) => {
      this.list = list;
    });
  }

  filterList(event: Event): void {
    this.listService.filterList(event).subscribe((list) => {
      this.list.data = list;
    });
  }

  ngOnInit() {
    this.getList();
  }
}
