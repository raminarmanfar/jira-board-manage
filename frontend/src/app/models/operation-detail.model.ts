import { OperationType } from './task-enums';
import { ITask } from './task.model';

export interface OperationDetail {
    operationType: OperationType;
    task: ITask;
    taskId?: number;
}