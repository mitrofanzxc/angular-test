import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FEATURES } from 'src/app/data/features';
import { IFeatures } from 'src/app/data/features.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit {
  features: IFeatures[] = FEATURES;
  total: { name: string; transactions: number; amount: number }[] = [
    { name: 'total', transactions: 0, amount: 0 },
    { name: 'income', transactions: 0, amount: 0 },
    { name: 'outcome', transactions: 0, amount: 0 },
    { name: 'loan', transactions: 0, amount: 0 },
    { name: 'investment', transactions: 0, amount: 0 },
  ];

  constructor(private dataService: DataService) {}

  getData(): void {
    this.dataService.getData().subscribe((data) => {
      this.total[0].transactions = data.data.length;
      this.total[0].amount = data.data.reduce(
        (acc, val) => acc + val.amount,
        0
      );
    });
  }

  getFilteredData(value: string, index: number): void {
    this.dataService.getFilteredData(value).subscribe((data) => {
      this.total[index].transactions = data.length;
      this.total[index].amount = data.reduce((acc, val) => acc + val.amount, 0);
    });
  }

  ngOnInit(): void {
    this.getData();

    for (let i = 1; i < this.total.length; i += 1) {
      this.getFilteredData(this.total[i].name, i);
    }
  }
}
