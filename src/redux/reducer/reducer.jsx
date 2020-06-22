import { ACTION_TYPES } from '../actionTypes/actionTypes';

const INITIAL_STATE = {
    theme: false,
    isModalOpen: false,
    isTaskModalOpen: false,
    tasks: [],

};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_MODAL:
            return state = { 
                ...state, 
                isModalOpen: !state.isModalOpen 
            };
        case ACTION_TYPES.SET_TASK:
            return state = {
                ...state,
                tasks: [...state.tasks, {
                    task: action.value
                }]
            };
        case ACTION_TYPES.CHANGE_THEME:
            return state = {
                ...state, theme: state.theme ? !state.theme : !state.theme
            };
        default:
            return state
    };
};

export { reducer };