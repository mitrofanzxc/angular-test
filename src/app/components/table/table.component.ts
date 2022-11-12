import { Component, OnInit } from '@angular/core';
import { ListService } from './../../services/list.service';
import { IList } from './../../data/list.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  list: IList = { total: 0, data: [] };

  constructor(public listService: ListService) {}

  ngOnInit() {
    this.listService.getList().subscribe((list) => {
      this.list = list;
    });
  }
}
