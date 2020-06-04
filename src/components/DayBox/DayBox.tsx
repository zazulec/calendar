import * as React from 'react';
import { StyledDayBox } from './styled/StyledDayBox';

function DayBox() {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let displayDays = days.map((day,id) => (
    <StyledDayBox key={id}>{day}</StyledDayBox>));
    
    return (
        <>
        {displayDays}
        </>
    )
};

export { DayBox };   