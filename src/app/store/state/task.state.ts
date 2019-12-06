import { ITask } from '../../models/task.model';

export interface ITaskState {
    tasks: ITask[];
    selectedTask: ITask;
}

export const initialTaskState: ITaskState = {
    tasks: [],
    selectedTask: null
};
