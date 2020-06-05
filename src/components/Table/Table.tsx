import React from 'react';
import { Row } from './styled/Row/Row';
import { Columns } from './styled/Columns/Columns';
import { Box } from './styled/Box/Box';



function Table() {
    // let today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let displayhours = hours.map((hour, id) => < div key={id}>{hour}</div>)
    const data = {
        hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        box: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    };

    const displayColumns = data.hours.map((hour, id) => <Box key={id}>{hour}</Box>);
    const displayRow = data.box.map((box, id) => <Box key={id}>{box}</Box>);




    return (
        <>
            <Columns>
                {displayColumns}
            </Columns>
            <Row>
                {displayRow}
            </Row>


        </>
    )
};

export { Table };