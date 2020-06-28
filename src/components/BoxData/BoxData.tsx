import React from 'react';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';

interface BoxDataProps {
    day: number,
    hour: number,
    tasks?: any[],
    actionToggleTaskModal: (data:any)=> void,
    
};

function BoxData(props: BoxDataProps) {

    // const [filtredTasks, setFiltredTasks] = useState([]);

   
    const findTasks:any = () => {

        const tasksData = props.tasks && props.tasks.filter((data) => {
           
            const taskDate = new Date(data.task.date);
            const taskDay = taskDate.getDay();
            const taskHours = taskDate.getHours();
            
            return (
                taskDay === props.day && taskHours === props.hour
                
            );
        });
        return (tasksData || [] );     
    };
    

    const taskToRender = findTasks().map((data:any) => (
        <div key={data} onClick={() => props.actionToggleTaskModal(data)}>
            <div>{data.task.text}</div>
            {/* <div>{data.task.date}</div>  */}
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


const mapDispatchToProps = (dispatch:any) =>({
    actionToggleTaskModal: (data:any) => dispatch({ type: ACTION_TYPES.SET_TASK_MODAL_DATA, value: data.task}),
    
}) 


export default connect(mapStateToProps, mapDispatchToProps)(BoxData);
