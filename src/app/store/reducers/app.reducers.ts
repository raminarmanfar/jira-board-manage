import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { taskReducers } from './task.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    tasks: taskReducers
}