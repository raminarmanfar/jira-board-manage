import { createSelector } from '@ngrx/store';
import { IAppState } from "../state/app.state";
import { ITaskState } from '../state/task.state';

const selectTasks = (state: IAppState) => state.tasksState;

export const selectTaskList = createSelector(
    selectTasks,
    (state: ITaskState) => state.tasksList
);

export const selectSelectedTask = createSelector(
    selectTasks,
    (state: ITaskState) => state.selectedTask
);