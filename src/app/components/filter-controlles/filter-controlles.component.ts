import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToggleBtnData, initToggles } from '../../models/toggle-btn-data.model';

@Component({
  selector: 'app-filter-controlles',
  templateUrl: './filter-controlles.component.html',
  styleUrls: ['./filter-controlles.component.scss']
})
export class FilterControllesComponent implements OnInit {

  toggleItems: ToggleBtnData[];
  toggleStatus: string[];

  @Output() change: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
    this.toggleItems = initToggles();
    this.toggleStatus = [];
  }

  onChange(toggleStatus: string[]) {
    this.toggleStatus = toggleStatus;
    this.change.emit(toggleStatus);
  }

  isToggled(selectedToggle: string): boolean {
    return this.toggleStatus.includes(selectedToggle);
  }

}
