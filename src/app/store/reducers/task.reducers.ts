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
                selectedTask: action.payload,
                loading: false
            };
        case ETaskActions.GetTasks: 
        case ETaskActions.AddTask: 
        case ETaskActions.DeleteTask:
            return {
                ...state,
                loading: true
            }
        case ETaskActions.GetTasksSuccess:
            return {
                ...state,
                tasksList: action.payload,
                loading: false
            }
        case ETaskActions.AddTaskSuccess:
            return {
                ...state,
                tasksList: state.tasksList.concat(action.payload),
                loading: false
            }
        case ETaskActions.DELETETaskSuccess:
            return {
                ...state,
                tasksList: state.tasksList.filter(item => item.id !== action.payload),
                loading: false
            }
        default: return state;
    }
};