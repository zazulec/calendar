import React from 'react';
import { connect } from 'react-redux';
import { DayTaskskWrapper } from './styled/DayTaskWrapper/DayTaskWrapper';

function DayTasks() {

    const displayDayTasks = () => {


        return (
            <div>
                {"funckcja jeszcze nic nie robi. Ma pokazywać wszystkie taski na dany dzień"}
            </div>
            
        )
    }

    return (
        <DayTaskskWrapper>
            {displayDayTasks()}
            
        </DayTaskskWrapper>

    )
};

 const mapStateToProps = (state:any) => ({
    tasks: state.tasks
 });
 
export default connect (mapStateToProps,null)(DayTasks);