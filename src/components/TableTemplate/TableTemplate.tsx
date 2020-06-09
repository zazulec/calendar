import React from 'react';
import { Box } from './styled/Box/Box';
import { Row } from './styled/Row/Row';
import { DayBox } from '../DayBox/DayBox';
import TableRowTemplate from '../TableRowTemplate/TableRowTemplate';

function TableTemplate() {

    const data = {
        hours: [...Array(24).keys()].map(i => i + 1),
    };

    const displayTable = data.hours.map((hour, index) => (
        <Row key={index}>
            <Box key={index}>{hour}</Box>
            <TableRowTemplate/>
        </Row>

    ));
    return(
        <>
        <DayBox/>
        {displayTable}
        </>
    )
};

export { TableTemplate };