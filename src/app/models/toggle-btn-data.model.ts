export interface ToggleBtnData {
    id: string;
    title: string;
    icon: string;
    checked: boolean;
}

export function initToggles(): ToggleBtnData[] {
    return [
        {
            id: 'notStarted',
            title: 'Show not started',
            icon: 'power_off',
            checked: false
        },
        {
            id: 'done',
            title: 'Show Done',
            icon: 'done',
            checked: false
        },
        {
            id: 'notDone',
            title: 'Show Not Done',
            icon: 'clear',
            checked: false
        },
        {
            id: 'inProgress',
            title: 'Show in progress',
            icon: 'restore',
            checked: false
        },
        {
            id: 'inTest',
            title: 'Show in test',
            icon: 'ballot',
            checked: false
        },
        {
            id: '1thReview',
            title: 'Show 1th reviews',
            icon: 'sync',
            checked: false
        },
        {
            id: '2ndReview',
            title: 'Show 2nd reviews',
            icon: 'sync_problem',
            checked: false
        },
        {
            id: 'blocked',
            title: 'Show blocked',
            icon: 'block',
            checked: false
        },
    ];
}