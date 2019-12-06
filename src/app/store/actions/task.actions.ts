import { Action } from '@ngrx/store';
import { ITask } from 'src/app/models/task.model';

export enum ETaskActions {
    GetTask = '[Task] Get Task',
    GetTaskSuccess = '[Task] Get Task Success',
    GetTasks = '[Task] Get Tasks',
    GetTasksSuccess = '[Task] Get Tasks Success',
    AddTask = '[Task] Add Task',
    AddTaskSuccess = '[Task] Add Task Success'
}

export class GetTask implements Action {
    public readonly type = ETaskActions.GetTask;
    constructor(public payload: number) {}
}

export class GetTaskSuccess implements Action {
    public readonly type = ETaskActions.GetTaskSuccess;
    constructor(public payload: ITask) {}
}

export class GetTasks implements Action {
    public readonly type = ETaskActions.GetTasks;
}

export class GetTasksSuccess implements Action {
    public readonly type = ETaskActions.GetTasksSuccess;
    constructor(public payload: ITask[]) {}
}

export class AddTask implements Action {
    public readonly type = ETaskActions.AddTask;
    constructor(public payload: ITask) {}
}

export class AddTaskSuccess implements Action {
    public readonly type = ETaskActions.AddTaskSuccess;
    constructor(public payload: ITask) {}
}

export type TaskActions = 
    | GetTask 
    | GetTaskSuccess 
    | GetTasks 
    | GetTasksSuccess
    | AddTask
    | AddTaskSuccess;