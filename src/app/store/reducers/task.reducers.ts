import { ITaskState, initialTaskState } from '../state/task.state';
import { TaskActions, ETaskActions } from '../actions/task.actions';

export const taskReducers = (
    state = initialTaskState,
    action: TaskActions
): ITaskState => {
    switch (action.type) {
        case ETaskActions.GetTask:
        case ETaskActions.GetTasks:
        case ETaskActions.AddTask:
        case ETaskActions.DeleteTask:
        case ETaskActions.UpdateTask:
            return {
                ...state,
                loading: true
            }
        case ETaskActions.GetTaskSuccess:
            return {
                ...state,
                selectedTask: action.payload,
                loading: false
            };
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
        case ETaskActions.DeleteTaskSuccess:
            return {
                ...state,
                tasksList: state.tasksList.filter(item => item.id !== action.payload),
                loading: false
            }
        case ETaskActions.UpdateTaskSuccess:
            const task = state.tasksList.find(task => task.id === action.payload.id);
            const index = state.tasksList.indexOf(task);
            state.tasksList[index] = action.payload;
            return {
                ...state,
                loading: false
            }
        default: return state;
    }
};