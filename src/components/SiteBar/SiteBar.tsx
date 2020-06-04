import * as React from 'react';
import { HourBox } from './styled/StyledHourBox';

function SiteBar() {
    // let today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let displayhours = hours.map(hour => <HourBox>{hour}</HourBox>)
    return (
        <div>
            SiteBar
            {displayhours}
        </div>
    )
};

export { SiteBar };