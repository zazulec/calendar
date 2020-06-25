import * as React from 'react';
import { Wrapper } from './styled/Wrapper/Wrapper';
import { Table } from '../Table/Table';
import  ModalWindow from '../ModalWindow/ModalWindow';
import  TaskModal  from '../TaskModal/TaskModal';


function MainBoard() {

    return (
        <Wrapper>
            <ModalWindow />
            <TaskModal />
            <Table />
        </Wrapper>


    )
};

export { MainBoard };