export enum TaskStatus {
    NOT_STARTED = 'Not Started',
    IN_PROGRESS = 'In Progress',
    BLOCKED = 'Blocked',
    IN_REVIEW = 'In Review',
    IN_TEST = 'In Test',
    DONE = 'Done',
}

export enum TaskType {
    DEVELOPMENT = "Development",
    FIRST_REVIEW = "1th Review",
    SECOND_REVIEW = "2nd Review",
    TEST = "Test",
    EVALUATION = "Evaluation",
    BUG_FIX = "Bug Fix",
    DEPLOYMENT = "Deployment",
    DOCUMENTATION = "Documentation"
}

export enum OperationType {
    ADD = 'add',
    UPDATE = 'update',
    DELETE = 'delete',
    DONE = 'done',
    BLOCK = 'block',
    PROGRESS = 'progress'
}