import * as React from 'react';
import { StyledMainBoard } from './styled/StyledMainBoard';
import { StyledConteiner } from './styled/StyledConteiner';
import { DayBox } from '../DayBox/DayBox';

function MainBoard() {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let displayDays = days.map(day => <DayBox>{day}</DayBox>)
    // let counter = {
    //     const count = 0

    // }
    
    

    return (
            <StyledConteiner>
               {displayDays}
            </StyledConteiner>
            
    )
};

export { MainBoard };