import { OperationType } from './task-enums';

export interface OperationDetail {
    operationType: OperationType;
    taskId: number;
}