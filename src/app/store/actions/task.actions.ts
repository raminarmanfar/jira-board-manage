import { Action } from '@ngrx/store';
import { ITask } from '../../models/task.model';
import { OperationDetail } from '../../models/operation-detail.model';

export enum ETaskActions {
    GetTask = '[Task] Get Task',
    GetTaskSuccess = '[Task] Get Task Success',
    GetTasks = '[Task] Get Tasks',
    GetTasksSuccess = '[Task] Get Tasks Success',
    AddTask = '[Task] Add Task',
    AddTaskSuccess = '[Task] Add Task Success',
    DeleteTask = '[Task] Delete Task',
    DeleteTaskSuccess = '[Task] Delete Task Success',
    UpdateTask = '[Task] Update Task',
    UpdateTaskSuccess = '[Task] Update Task Success'
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

export class DeleteTask implements Action {
    public readonly type = ETaskActions.DeleteTask;
    constructor(public payload: number) {}
}

export class DeleteTaskSuccess implements Action {
    public readonly type = ETaskActions.DeleteTaskSuccess;
    constructor(public payload: number) {}
}

export class UpdateTask implements Action {
    public readonly type = ETaskActions.UpdateTask;
    constructor(public payload: { taskId: number, updatedTask: ITask }) {}
}

export class UpdateTaskSuccess implements Action {
    public readonly type = ETaskActions.UpdateTaskSuccess;
    constructor(public payload: ITask) {}
}

export type TaskActions 
    = GetTask 
    | GetTaskSuccess 
    | GetTasks 
    | GetTasksSuccess
    | AddTask
    | AddTaskSuccess
    | DeleteTask
    | DeleteTaskSuccess
    | UpdateTask
    | UpdateTaskSuccess;