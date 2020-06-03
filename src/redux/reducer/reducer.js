import { ACTION_TYPES } from '../actionTypes/actionTypes';

const INITIAL_STATE = {
    theme: false,

};


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            return state
        case ACTION_TYPES.CHANGE_THEME:
            return state = {
                ...state, theme: state.theme ? !state.theme : !state.theme
            }
        default:
            return state
    };
};

export { reducer };