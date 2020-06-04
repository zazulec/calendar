import React from 'react';
import { Wrapper } from './styled/StyledWeekSwitcher';
import { Button } from './styled/StyledButton';
import { Span } from './styled/StyledSpan';

function WeekSwitcher() {

    return (
        <Wrapper>
            <Button>{`<`} </Button>
            <Span>Week nr....</Span>
            <Button>{`>`} </Button>
        </Wrapper>
    )

};

export { WeekSwitcher };