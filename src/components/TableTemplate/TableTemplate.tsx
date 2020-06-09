import React from 'react';
import { Box } from './styled/Box/Box';
import { Column } from './styled/Column/Column';
import { DayBox } from '../DayBox/DayBox';
import { Row } from './styled/Row/Row';

function TableTemplate() {

    const data = {
        // hours: [...Array(24).keys()].map(i => i + 1),
        hours: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    };

    const displayTable = data.hours.map((hour, index) => (
        <Column key={index}>
            <Box key={index}>{hour}</Box>
        </Column>
    ));

    return (
        <Row>
            <Column>
                {displayTable}
            </Column>
            <DayBox />
        </Row>

    )
};

export { TableTemplate };