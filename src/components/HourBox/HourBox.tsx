import React from 'react';
import { StyledHourBox } from './styled/StyledHourBox';

function HourBox() {
    // let today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let displayhours = hours.map((hour, id) => <StyledHourBox key={id}>{hour}</StyledHourBox>)
    return (
        <>
            {displayhours}
        </>
    )
};

export { HourBox };