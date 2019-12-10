export enum OperationType {
    ADD = 'add',
    UPDATE = 'update',
    DELETE = 'delete',
    DONE = 'done',
    BLOCK = 'block',
}

export interface OperationDetail {
    operationType: OperationType;
    taskId: number;
}