import { ITask } from '../../models/task.model';

export interface ITaskState {
    tasksList: ITask[];
    selectedTask: ITask;
    loading: boolean;
}

export const initialTaskState: ITaskState = {
    tasksList: [],
    selectedTask: null,
    loading: false
};
