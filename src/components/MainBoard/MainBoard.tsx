import * as React from 'react';
import { StyledConteiner } from './styled/StyledConteiner';
import { DayBox } from '../DayBox/DayBox';
import { Wrapper } from './styled/Wrapper';
import { HourBox } from '../HourBox/HourBox';
import { StyledHourBox } from '../HourBox/styled/StyledHourBox';


function MainBoard() {

    return (
        <Wrapper>
            <StyledConteiner>
                <StyledHourBox>
                    <HourBox />
                </StyledHourBox>
                <DayBox />
            </StyledConteiner>
        </Wrapper>


    )
};

export { MainBoard };