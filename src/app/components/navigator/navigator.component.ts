import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getData(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  filterData(event: Event): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked as boolean;
    const id = target.id.slice(-1) as string;

    if (checked) {
      this.router.navigate(['navigator'], {
        queryParams: { tab: id },
      });
    }

    this.dataService.filterData(event).subscribe((data) => {
      this.data.data = data;
    });
  }

  ngOnInit() {
    this.getData();
  }
}
