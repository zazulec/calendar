import React from 'react';
import { Box } from './styled/Box/Box';
import { Row } from './styled/Row/Row';
import { DayBox } from '../DayBox/DayBox';

function TableTemplate() {

    const data = {
        hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        box: ['', '', '', '', '', '', '']
    };

    const rowTemplate = data.box.map((boxData, index) => (
        <Box key={index} onClick={()=>window.alert('alert')}>{boxData}</Box>
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
export { TableTemplate };