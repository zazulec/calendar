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
        hours: [...Array(24).keys()].map(i => i + 1),
        box: ['', '', '', '', '', '', ''],
    };

    const rowTemplate = data.box.map((boxData, index) => (
        <Box key={index} onClick={props.actionToggleModal}>{boxData}</Box>
    )); 
        //row template  do osobnego komponentu


    const displayTable = data.hours.map((hour, index) => (
        <Row key={index}>
            <Box key={index}>{hour}</Box>
            {rowTemplate}
        </Row>

    ));
    return(
        <>
        <DayBox/>
        {displayTable}
        </>
    )
};

const mapDispatchToProps = (dispatch:any) => ({
    actionToggleModal: () => dispatch({type: ACTION_TYPES.TOGGLE_MODAL}),
  });

export default connect(null,mapDispatchToProps)(TableTemplate);