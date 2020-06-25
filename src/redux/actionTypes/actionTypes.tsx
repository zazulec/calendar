interface ACTION_TYPES  {
    INCREMENT: String,
    CHANGE_THEME: String,
    TOGGLE_MODAL: String,
    SET_TASK: String,
}

export const ACTION_TYPES = {

    CHANGE_THEME: 'CHANGE_THEME',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    SET_TASK: 'SET_TASK',
    TOGGLE_TASK_MODAL: 'TOGGLE_TASK_MODAL',
};

export const TOGGLE_MODAL = (isModalOpen: boolean) => {
    return {
        type: ACTION_TYPES.TOGGLE_MODAL, isModalOpen
    }
};

export const SET_TASK = (data: any) => {
    return {
        type: ACTION_TYPES.SET_TASK, data
    }
};

export const TOGGLE_TASK_MODAL = (isTaskModalOpen: boolean) => {
    return {
        type: ACTION_TYPES.TOGGLE_TASK_MODAL, isTaskModalOpen
    }
};