import React from 'react';
import { Row } from './styled/Row/Row';
import { Columns } from './styled/Columns/Columns';
import { Box } from './styled/Box/Box';
import { RowTemplate } from '../RowTemplate/RowTemplate';


function Table() {
    
    const data = {
        hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        box: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    };

    const displayColumns = data.hours.map((hour, index) => (
        <Row>
            <Box key={index}>{hour}</Box>
            <RowTemplate />
        </Row>

    ));

    return (
        <>
            {displayColumns}

        </>
    )
};

export { Table };