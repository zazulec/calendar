import React from 'react';
import { connect } from 'react-redux';
import { TaskModalWrapper } from './styled/TaskModalWrapper/TaskModalWrapper';
import { TaskModalConteiner } from './styled/TaskModalConteiner/TaskModalConteiner';
import  ButtonClose  from '../ButtonClose/ButtonClose';
import { ButtonWrapper } from './styled/ButtonWrapper/ButtonWrapper';
import ButtonDeleteTask from '../ButtonDeleteTask/ButtonDeleteTask';
import  DayTasks  from '../DayTasks/DayTasks';

interface TaskModalProps {
    isTaskModalOpen?: string,
    
    
}

function TaskModal(props:TaskModalProps) {

    return (
        <TaskModalConteiner isTaskModalOpen={props.isTaskModalOpen}>
             <TaskModalWrapper>
                 <DayTasks/>
                <ButtonWrapper>
                    <ButtonDeleteTask />
                    <ButtonClose />
                </ButtonWrapper>
            </TaskModalWrapper>
        </TaskModalConteiner>
    )
};

const mapStateToProps = (state:any) => ({
    isTaskModalOpen: state.isTaskModalOpen
});

export default connect(mapStateToProps, null)(TaskModal);