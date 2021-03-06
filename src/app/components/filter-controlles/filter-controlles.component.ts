import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToggleBtnData, initToggles } from '../../models/toggle-btn-data.model';

@Component({
  selector: 'app-filter-controlles',
  templateUrl: './filter-controlles.component.html',
  styleUrls: ['./filter-controlles.component.scss']
})
export class FilterControllesComponent implements OnInit {

  toggleItems: ToggleBtnData[];
  toggleIds: string[];

  @Output() change: EventEmitter<ToggleBtnData[]> = new EventEmitter<ToggleBtnData[]>();

  constructor() { }

  ngOnInit() {
    this.toggleItems = initToggles();
    this.toggleIds = [];
  }

  onChange(toggleIds: string[]) {
    this.toggleIds = toggleIds;
    const filteredToggles = this.toggleItems.filter(res => toggleIds.includes(res.id));
    this.change.emit(filteredToggles);
  }

  isToggled(selectedToggleId: string): boolean {
    return this.toggleIds.includes(selectedToggleId);
  }

}
