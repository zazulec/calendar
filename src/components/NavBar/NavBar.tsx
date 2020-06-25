import * as React from 'react';
import { WeekSwitcher } from '../WeekSwitcher/WeekSwitcher';
import  OpenModalButtonAddTask  from '../OpenModalButtonAddTask/OpenModalButtonAddTask';

function NavBar() {

    return (
        <div>
            <WeekSwitcher />
            <OpenModalButtonAddTask/>
        </div>
    )
};

export { NavBar };