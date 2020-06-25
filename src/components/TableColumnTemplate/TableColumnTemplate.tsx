import React from 'react';
import { Box } from './styled/Box/Box';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';
import  BoxData  from '../BoxData/BoxData';


interface TableColumnTemplateProps {
    actionToggleModal: () => void,
    tasks: any,
    dayIndex: number,
};

const getFixedDayIndex = (dayIndex: number): number => {
    if (dayIndex === 6) {
        return 0;
    }
    return dayIndex + 1;
};

function TableColumnTemplate(props: TableColumnTemplateProps) {

    const data = {
        box: Array(24).join(".").split("."),
    };

    const createRowTemplate = () => {
        const rowTemplate = data.box.map((boxData, index) => (
            <Box
                key={index}
               >
            <BoxData day={getFixedDayIndex(props.dayIndex)} hour={index} />
            </Box>
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
};
const mapDispatchToProps = (dispatch: any) => ({
    actionToggleModal: () => dispatch({ type: ACTION_TYPES.TOGGLE_MODAL }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableColumnTemplate);
