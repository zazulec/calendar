import React from 'react';
import { Box } from './styled/Box/Box';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';

interface TableRowTemplateProps {
    actionToggleModal: ()=> void,
};

function TableRowTemplate(props: TableRowTemplateProps)  {

    const data = {
        box: ['', '', '', '', '', '', ''],
    };
    const rowTemplate = data.box.map((boxData, index) => (
        <Box key={index} onClick={props.actionToggleModal}>{boxData}</Box>
    )); 
    return(
        <>
        {rowTemplate}
        </>
    )
};

const mapDispatchToProps = (dispatch:any) => ({
    actionToggleModal: () => dispatch({type: ACTION_TYPES.TOGGLE_MODAL}),
  });

export default connect(null,mapDispatchToProps)(TableRowTemplate);
