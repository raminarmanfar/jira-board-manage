import { TaskType, TaskStatus } from './task-enums';

export interface ITask {
    id?: number;
    mainTaskNo: number;
    subTaskNo: number;
    assignDate: Date;
    doneDate: Date;
    type: TaskType;
    status: TaskStatus;
    desc: string;
}