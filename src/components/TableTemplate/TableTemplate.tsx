import React from 'react';
import { connect } from 'react-redux';
import { Box } from './styled/Box/Box';
import { Row } from './styled/Row/Row';
import { DayBox } from '../DayBox/DayBox';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';

interface TableTemplateProps {
    actionToggleModal: ()=> void,
};

function TableTemplate(props: TableTemplateProps) {

    const data = {
        hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        box: ['', '', '', '', '', '', '']
    };

    const rowTemplate = data.box.map((boxData, index) => (
        <Box key={index} onClick={props.actionToggleModal}>{boxData}</Box>
    ));

    //zrobić na on clicku okno modalne z templatką do wypełnienia 

    const displayTable = data.hours.map((hour, index) => (
        <Row>
            <Box key={index}>{hour}</Box>
            {rowTemplate}
        </Row>

    ));
    return(
        <>
        {'zrobić na on clicku okno modalne z templatką do wypełnienia '}
        <DayBox/>
        {displayTable}
        </>
    )
};

const mapDispatchToProps = (dispatch:any) => ({
    actionToggleModal: () => dispatch({type: ACTION_TYPES.TOGGLE_MODAL}),
  });

export default connect(null,mapDispatchToProps)(TableTemplate);