import * as React from 'react';
import { Wrapper } from './styled/Wrapper/Wrapper';
import { Table } from '../Table/Table';
import { ModalWindow } from '../ModalWindow/ModalWindow';


function MainBoard() {

    return (
        <Wrapper>
            <ModalWindow/>
            <Table />
        </Wrapper>


    )
};

export { MainBoard };