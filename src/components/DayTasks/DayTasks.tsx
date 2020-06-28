import React from 'react';
import { connect } from 'react-redux';
import { DayTaskskWrapper } from './styled/DayTaskWrapper/DayTaskWrapper';

// interface DayTasksProps {
//     data: any,
// }

function DayTasks(props: any) {
    const displayDayTasks = () => {

        return (
            <div>
                {props.task ? props.task.text : ""}
            </div>
        );
    };

    return (
        <DayTaskskWrapper>
            {displayDayTasks()}
            
        </DayTaskskWrapper>
    );
};

 const mapStateToProps = (state:any) => ({
    task: state.taskModalData
 });
 
export default connect (mapStateToProps,null)(DayTasks);