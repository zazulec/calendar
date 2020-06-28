import { ACTION_TYPES } from '../actionTypes/actionTypes';

const INITIAL_STATE = {
    theme: false,
    isModalOpen: false,
    taskModalData: null,
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
            case ACTION_TYPES.SET_TASK_MODAL_DATA:
                return state = { 
                    ...state, 
                    taskModalData: action.value
                };  
                case ACTION_TYPES.REMOVE_TASK:
                    return state = {
                        ...state,
                        tasks: state.tasks.filter(task => {
                            return task.text === action.value.text && task.date === action.value.date
                            }
                        )
                    };
        default:
            return state
    };
};

export { reducer };