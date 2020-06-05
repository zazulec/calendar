import * as React from 'react';
import { StyledDayBox } from './styled/DayBox.tsx/StyledDayBox';
import { Wrapper } from './styled/Wrapper/Wrapper';

function DayBox() {

    let days = ['','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let displayDays = days.map((day,id) => (
    <StyledDayBox key={id}>{day}</StyledDayBox>));
    
    return (
        <Wrapper>
        {displayDays}
        </Wrapper>
    )
};

export { DayBox };   