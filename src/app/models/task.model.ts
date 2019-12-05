import { TaskType, TaskStatus } from './task-enums';

export interface ITask {
    taskId: number;
    mainTaskNo: number;
    subTaskNo: number;
    assignedDate: Date;
    doneDate: Date;
    type: TaskType;
    status: TaskStatus;
    desc: string;
}