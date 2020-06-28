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
    SET_TASK_MODAL_DATA: 'SET_TASK_MODAL_DATA',
    REMOVE_TASK: 'REMOVE_TASK',
    // SET_TASKS_TO_RENDER: 'SET_TASKS_TO_RENDER',
};

// export const TOGGLE_MODAL = (isModalOpen: boolean) => {
//     return {
//         type: ACTION_TYPES.TOGGLE_MODAL, isModalOpen
//     };
// };

// export const SET_TASK = (data: any) => {
//     return {
//         type: ACTION_TYPES.SET_TASK, data
//     };
// };

// export const TOGGLE_TASK_MODAL = (isTaskModalOpen: boolean) => {
//     return {
//         type: ACTION_TYPES.SET_TASK_MODAL_DATA, isTaskModalOpen
//     };
// };

// export const SET_TASKS_TO_RENDER = (data:[]) => {
//     return {
//         type: ACTION_TYPES.SET_TASKS_TO_RENDER, data
//     };
// };