import * as React from 'react';
import { StyledDayBox } from './styled/DayBox/StyledDayBox';
import { Column } from './styled/Column/Column';
import { Row } from './styled/Row/Row';
import TableColumnTemplate from '../TableColumnTemplate/TableColumnTemplate';



function DayBox() {

    const days:String[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const displayDays:any = days.map((day,id) => (
    <Column>  
        <StyledDayBox key={id}>{day}</StyledDayBox>
        <TableColumnTemplate/>
    </Column> 
    ));
    
    return (
        <Row>
        {displayDays}
        </Row>
        
    )
};

export { DayBox };   