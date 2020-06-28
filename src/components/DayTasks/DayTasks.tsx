import React from 'react';
import { connect } from 'react-redux';
import { DayTaskskWrapper } from './styled/DayTaskWrapper/DayTaskWrapper';

interface DayTasksProps {
    task?: any,
    text?: string,
    date?: string,
};

function DayTasks(props: DayTasksProps) {


    const displayDayTasks = () => {

        const displayTaskHour = props.task ? props.task.date.slice(11,15): '';

        return (
            <DayTaskskWrapper>
                {props.task ? props.task.text : ""}
                {props.task ? displayTaskHour : ""}
            </DayTaskskWrapper>
        );
    };

    return ( displayDayTasks() );
};

 const mapStateToProps = (state:any) => ({
    task: state.taskModalData
 });
 
export default connect (mapStateToProps,null)(DayTasks);