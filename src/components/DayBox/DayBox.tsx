import * as React from 'react';
import { StyledDayBox } from './styled/DayBox.tsx/StyledDayBox';
import { Row } from './styled/Row/Row';


function DayBox() {

    const days = ['','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const displayDays = days.map((day,id) => (
    <StyledDayBox key={id}>{day}</StyledDayBox>));
    
    return (
        <Row>
        {displayDays}
        </Row>
        
    )
};

export { DayBox };   