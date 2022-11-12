import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IData } from '../../data/data.interface';
import { BUTTONS } from '../../data/buttons';
import { IButtons } from '../../data/buttons.interface';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
})
export class NavigatorComponent implements OnInit {
  data: IData = { total: 0, data: [] };
  buttons: IButtons[] = BUTTONS;

  constructor(private dataService: DataService) {}

  getData(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  filterData(event: Event): void {
    this.dataService.filterData(event).subscribe((data) => {
      this.data.data = data;
    });
  }

  ngOnInit() {
    this.getData();
  }
}
