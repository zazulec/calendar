import React, { useEffect } from 'react';
import { Box } from './styled/Box/Box';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';

interface TableColumnTemplateProps {
    actionToggleModal: () => void,
    tasks: any,
};

function TableColumnTemplate(props: TableColumnTemplateProps) {

    const data = {
        box: Array(24).join(".").split("."),
    };

    useEffect(() => {
        return (()=> funkcja(props))
    })
    console.log('tasks z komponentu', props.tasks  )
const funkcja = (props:any) => {
    data.box.splice(1,0,props.tasks )
    console.log('po',data.box)
};


    const createRowTemplate = () => {
        const rowTemplate = data.box.map((boxData, index) => (
            <Box key={index} onClick={props.actionToggleModal}>{boxData}</Box>
        ));
            return rowTemplate
    }
    return (
        <>
            {createRowTemplate()}
        </>
    )
};
const mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch: any) => ({
    actionToggleModal: () => dispatch({ type: ACTION_TYPES.TOGGLE_MODAL }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableColumnTemplate);
