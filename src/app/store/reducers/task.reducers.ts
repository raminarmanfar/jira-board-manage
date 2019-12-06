import { ITaskState, initialTaskState } from '../state/task.state';
import { TaskActions, ETaskActions } from '../actions/task.actions';

export const taskReducers = (
    state = initialTaskState,
    action: TaskActions
): ITaskState => {
    switch (action.type) {
        case ETaskActions.GetTaskSuccess:
            return {
                ...state,
                selectedTask: action.payload
            };
        case ETaskActions.GetTasksSuccess:
            return {
                ...state,
                tasks: action.payload
            }
        default: return state;
    }
};