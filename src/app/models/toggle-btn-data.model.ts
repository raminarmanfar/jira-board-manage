import { TaskStatus } from './task-enums';

export interface ToggleBtnData {
    id: string;
    status: TaskStatus;
    title: string;
    icon: string;
    isNot?: boolean;
}

export function initToggles(): ToggleBtnData[] {
    return [
        {
            id: 'notStarted',
            status: TaskStatus.NOT_STARTED,
            title: 'Show not started',
            icon: 'power_off',
        },
        {
            id: 'done',
            status: TaskStatus.DONE,
            title: 'Show Done',
            icon: 'done'
        },
        {
            id: 'notDone',
            status: TaskStatus.DONE,
            title: 'Show Not Done',
            icon: 'clear',
            isNot: true
        },
        {
            id: 'inProgress',
            status: TaskStatus.IN_PROGRESS,
            title: 'Show in progress',
            icon: 'trending_up'
        },
        {
            id: 'inTest',
            status: TaskStatus.IN_TEST,
            title: 'Show in test',
            icon: 'ballot'
        },
        {
            id: 'inReview',
            status: TaskStatus.IN_REVIEW,
            title: 'Show 1th reviews',
            icon: 'sync'
        },
        {
            id: 'blocked',
            status: TaskStatus.BLOCKED,
            title: 'Show blocked',
            icon: 'block'
        },
    ];
}