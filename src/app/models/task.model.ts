import { TaskType, TaskStatus } from './task-enums';

export interface ITask {
    taskId: number;
    mainTaskNo: number;
    subTaskNo: number;
    assignedDate: string;
    doneDate: string;
    type: TaskType;
    status: TaskStatus;
    desc: string;
}