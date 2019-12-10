import { ITask } from './task.model';
import { OperationType } from './task-enums';

export interface DetailPageData {
    task: ITask;
    operationType: OperationType
}