import { Injectable } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, Observable, combineLatest } from 'rxjs';
import { switchMap, map, withLatestFrom, mergeMap, tap } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import { IAppState } from '../state/app.state';
import { selectTaskList } from '../selectors/task.selectors';
import { GetTasks, ETaskActions, GetTask, GetTaskSuccess, GetTasksSuccess, AddTaskSuccess, AddTask, DeleteTaskSuccess, DeleteTask, UpdateTask, UpdateTaskSuccess, UpdateTaskStatus } from '../actions/task.actions';
import { ITask } from 'src/app/models/task.model';

@Injectable()
export class TaskEffects {
    constructor(
        private _taskService: TaskService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }

    @Effect()
    getTask$ = this._actions$.pipe(
        ofType<GetTask>(ETaskActions.GetTask),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectTaskList))),
        switchMap(([id, tasks]) => {
            const selectedTask = tasks.filter(task => task.id === +id)[0];
            return of(new GetTaskSuccess(selectedTask));
        })
    );

    @Effect()
    getTasks$ = this._actions$.pipe(
        ofType<GetTasks>(ETaskActions.GetTasks),
        switchMap(() => this._taskService.getAllTasks()),
        switchMap((tasks: ITask[]) => of(new GetTasksSuccess(tasks)))
    );

    @Effect()
    addTask$ = this._actions$.pipe(
        ofType<AddTask>(ETaskActions.AddTask),
        map(action => action.payload),
        switchMap((payload: ITask) => this._taskService.addNewTask(payload)),
        map((addedTask: ITask) => new AddTaskSuccess(addedTask))
    );

    @Effect()
    deleteTask$ = this._actions$.pipe(
        ofType<DeleteTask>(ETaskActions.DeleteTask),
        map(action => action.payload),
        mergeMap(taskId => this._taskService.deleteTask(taskId).pipe(
            map(() => new DeleteTaskSuccess(taskId))
        )),
    );

    @Effect()
    updateTask$ = this._actions$.pipe(
        ofType<UpdateTask>(ETaskActions.UpdateTask),
        map(action => action.payload),
        mergeMap(payload => this._taskService.updateTask(payload.taskId, payload.updatedTask).pipe(
            map((task: ITask) => new UpdateTaskSuccess(task))
        )),
    );

    @Effect()
    updateTaskStatus$ = this._actions$.pipe(
        ofType<UpdateTaskStatus>(ETaskActions.UpdateTaskStatus),
        map(action => action.payload),
        mergeMap(payload => this._taskService.updateTaskStatus(payload.taskId, payload.updatedTask, payload.newStatus).pipe(
            map((task: ITask) => new UpdateTaskSuccess(task))
        )),
    );

}