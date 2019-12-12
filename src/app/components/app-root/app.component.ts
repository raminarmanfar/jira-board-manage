import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITask } from '../../models/task.model';
import { IAppState } from '../../store/state/app.state';
import { AddTask } from 'src/app/store/actions/task.actions';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _store: Store<IAppState>,
    private _snackBar: MatSnackBar
  ) {}

  addTask(task: ITask) {
    if (task) {
      this._store.dispatch(new AddTask(task));
      this._snackBar.open(`Task (${task.mainTaskNo}, ${task.subTaskNo}) added.`, 'Success', { duration: 3000 });
    }
  }
}
