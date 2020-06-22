import React from 'react';
import { connect } from 'react-redux';
// import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';

interface BoxDataProps {
    day: number,
    hour: number,
    tasks?: any[],
};

function BoxData(props: BoxDataProps) {

    const findTasks = () => {

        const tasksData = props.tasks && props.tasks.filter((data) => {

            const taskDate = new Date(data.task.date);
            const taskDay = taskDate.getDay();
            const taskHours = taskDate.getHours();

            return (
                taskDay === props.day && taskHours === props.hour
            );
        });
        return tasksData || [];
    };

    const taskToRender = findTasks().map(data => (
        <div key={data} onClick={() => alert('klik')}>
            <div>{data.task.text}</div>
            {/* <div>{data.task.date}</div> */} 
        </div>
    ));
    return (
        <div>
            {taskToRender}
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks
    };
};


export default connect(mapStateToProps, null)(BoxData);
