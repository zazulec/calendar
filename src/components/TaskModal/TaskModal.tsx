import React from 'react';
import { TaskModalWrapper } from './styled/TaskModalWrapper/TaskModalWrapper';
import { TaskModalConteiner } from './styled/TaskModalConteiner/TaskModalConteiner';
import  ButtonClose  from '../ButtonClose/ButtonClose';
import { ButtonWrapper } from './styled/ButtonWrapper/ButtonWrapper';

interface TaskModalProps {
    isTaskModalOpen: string,
}

function TaskModal(props:TaskModalProps) {

    return (
        <TaskModalConteiner isTaskModalOpen={true}>
             <TaskModalWrapper>
                <ButtonWrapper>
                    <ButtonClose />
                    {/* <ButtonAddTask onClicked={handleAddTask} /> 
                    !!!!!!zmienić na button delete task */}
                </ButtonWrapper>
            </TaskModalWrapper>
        </TaskModalConteiner>
    )
};


export  { TaskModal };