import * as React from 'react';
import { StyledDayBox } from './styled/DayBox/StyledDayBox';
import { Column } from './styled/Column/Column';
import { Row } from './styled/Row/Row';
import TableColumnTemplate from '../TableColumnTemplate/TableColumnTemplate';


function DayColumn() {

    

    const days:String[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const displayDays:any = days.map((day,index) => (
    <Column key={index}>  
        <StyledDayBox key={index}>{day}</StyledDayBox>
        <TableColumnTemplate/>
    </Column> 
    ));
    
    return (
        <Row>
        {displayDays}
        </Row>
        
    )
};

export { DayColumn };   