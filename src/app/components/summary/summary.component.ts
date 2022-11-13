import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit {
  features: string[] = ['income', 'outcome', 'loan', 'investment'];

  constructor() {}

  ngOnInit(): void {}
}
