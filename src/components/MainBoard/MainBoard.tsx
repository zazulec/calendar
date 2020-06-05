import * as React from 'react';
import { DayBox } from '../DayBox/DayBox';
import { Wrapper } from './styled/Wrapper/Wrapper';
import { Table } from '../Table/Table';
import { Row } from './styled/Row/Row';


function MainBoard() {

    return (
        <Wrapper>
            <Row>
                <DayBox />
            </Row>
            <Table />
        </Wrapper>


    )
};

export { MainBoard };