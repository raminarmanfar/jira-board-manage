import { ITask } from './task.model';

export interface DetailPageData {
    task: ITask;
    submitBtnCaption: string;
    datesDisabled: boolean;
}