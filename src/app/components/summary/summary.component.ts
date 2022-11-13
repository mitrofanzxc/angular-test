import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit {
  features: { params: Params; value: string }[] = [
    { params: { tab: '0' }, value: 'income' },
    { params: { tab: '1' }, value: 'outcome' },
    { params: { tab: '2' }, value: 'loan' },
    { params: { tab: '3' }, value: 'investment' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
