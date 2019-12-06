import { ITask } from '../../models/task.model';

export interface ITaskState {
    tasks: ITask[];
    selectedTask: ITask;
    inProgress: boolean
}

export const initialTaskState: ITaskState = {
    tasks: [],
    selectedTask: null,
    inProgress: false
};