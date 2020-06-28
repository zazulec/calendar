import React from 'react';
import { connect } from 'react-redux';
import { TaskModalWrapper } from './styled/TaskModalWrapper/TaskModalWrapper';
import { TaskModalConteiner } from './styled/TaskModalConteiner/TaskModalConteiner';
import  ButtonClose  from '../ButtonClose/ButtonClose';
import { ButtonWrapper } from './styled/ButtonWrapper/ButtonWrapper';
import ButtonDeleteTask from '../ButtonDeleteTask/ButtonDeleteTask';
import  DayTasks  from '../DayTasks/DayTasks';

interface TaskModalProps {
    task?: any,
    date?: string,
}

function TaskModal(props:TaskModalProps) {

    const displayTaskDate = props.task ? props.task.date.slice(0,10): '';

    return (
        <TaskModalConteiner isTaskModalOpen={props.task}>
             <TaskModalWrapper>
             {`Yours tasks on ${displayTaskDate}`}
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
    task: state.taskModalData
});

export default connect(mapStateToProps, null)(TaskModal);