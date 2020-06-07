import React from 'react';
import { Box } from './styled/Box';

function RowTemplate() {

    const data = {
        box: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    };
    const rowTemplate = data.box.map((boxData, index) => (
        <Box key={index}>{boxData}</Box>
    ));
    return(
        <>
        {rowTemplate}
        </>
    )
};
export { RowTemplate };