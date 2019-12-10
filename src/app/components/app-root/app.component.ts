import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITask } from '../../models/task.model';
import { IAppState } from '../../store/state/app.state';
import { AddTask } from 'src/app/store/actions/task.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _store: Store<IAppState>) {}

  addTask(task: ITask) {
    if (task) {
      this._store.dispatch(new AddTask(task));
    }
  }
}
