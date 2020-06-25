import React from 'react';
import { connect } from 'react-redux';
import { OpenModalButtonAddTaskWrapper } from './styled/OpenModalButtonAddTaskWrapper/OpenModalButtonAddTaskWrapper';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';

interface OpenModalButtonAddTaskProps {
    actionToggleModal: ()=> string,
}

function OpenModalButtonAddTask(props:OpenModalButtonAddTaskProps) {

    return (
        <OpenModalButtonAddTaskWrapper>
            <button onClick={props.actionToggleModal}>Add Task</button>
        </OpenModalButtonAddTaskWrapper>
    )
};

const mapDispatchToProps = (dispatch: any) => ({
    actionToggleModal: () => dispatch({ type: ACTION_TYPES.TOGGLE_MODAL }),
});

export default connect(null, mapDispatchToProps)(OpenModalButtonAddTask);