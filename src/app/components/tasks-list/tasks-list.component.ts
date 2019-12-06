import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ITask } from '../../models/task.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectTaskList } from '../../store/selectors/task.selectors';
import { GetTasks } from '../../store/actions/task.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TasksListComponent {
  columnsToDisplay: string[] = ['mainTaskNo', 'subTaskNo', 'assignDate', 'type', 'status'];
  tasks$: Observable<ITask[]> = this._store.pipe(select(selectTaskList));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetTasks)
  }

}
