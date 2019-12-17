import { ITaskState, initialTaskState } from './task.state';

export interface IAppState {
    tasksState: ITaskState
}

export const initialAppState: IAppState = {
    tasksState: initialTaskState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
