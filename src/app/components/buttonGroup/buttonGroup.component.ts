import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-button-group',
  templateUrl: './buttonGroup.component.html',
})
export class ButtonGroupComponent implements OnInit {
  constructor(public listService: ListService) {}
  ngOnInit() {}
}
