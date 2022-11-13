import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { IData } from '../../data/data.interface';
import { BUTTONS } from '../../data/buttons';
import { IButtons } from '../../data/buttons.interface';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
})
export class NavigatorComponent implements OnInit, AfterViewInit {
  data: IData = { total: 0, data: [] };
  buttons: IButtons[] = BUTTONS;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getData(value: string): void {
    this.dataService.getData(value).subscribe((data) => {
      this.data.data = data;
      this.data.total = data.length;
    });
  }

  setQueryParams(event: Event): void {
    const target = event.target as HTMLInputElement;
    const id = target.id.slice(-1) as string;

    this.router.navigate(['navigator'], {
      queryParams: { tab: id },
    });
  }

  handleActiveButton(value: string) {
    const container = document.querySelector('.btn-group') as HTMLDivElement;
    const buttons = container.querySelectorAll(
      '.btn-check'
    ) as NodeListOf<HTMLInputElement>;

    buttons.forEach((button) => {
      if (button.value === value) {
        button.checked = true;
      }
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      switch (params['tab']) {
        case '0':
          this.getData('income');
          break;
        case '1':
          this.getData('outcome');
          break;
        case '2':
          this.getData('loan');
          break;
        case '3':
          this.getData('investment');
          break;
        default:
          this.getData('income');
          break;
      }
    });
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      switch (params['tab']) {
        case '0':
          this.handleActiveButton('income');
          break;
        case '1':
          this.handleActiveButton('outcome');
          break;
        case '2':
          this.handleActiveButton('loan');
          break;
        case '3':
          this.handleActiveButton('investment');
          break;
        default:
          this.handleActiveButton('income');
          break;
      }
    });
  }
}
