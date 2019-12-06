import { Injectable } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import { IAppState } from '../state/app.state';
import { selectTaskList } from '../selectors/task.selectors';
import { GetTasks, ETaskActions, GetTask, GetTaskSuccess, GetTasksSuccess } from '../actions/task.actions';
import { ITask } from 'src/app/models/task.model';

@Injectable()
export class TaskEffects {
    constructor(
        private _taskService: TaskService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) {}
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetTask>(ETaskActions.GetTask),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectTaskList))),
        switchMap(([id, tasks]) => {
            const selectedTask = tasks.filter(task => task.taskId === +id)[0];
            return of(new GetTaskSuccess(selectedTask));
        })
    );

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetTasks>(ETaskActions.GetTasks),
        switchMap(() => this._taskService.getAllTasks()),
        switchMap((taskHttp: ITask[]) => of(new GetTasksSuccess(taskHttp)))
    );
}