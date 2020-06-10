import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '20px',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

function DateAndTimePickers(props: any) {
  const [dataAndTimeValue, setDataAndTimeValue] = useState('');
  const classes = useStyles();

  const handleChange = (event: any) => {
    setDataAndTimeValue(event.target.value);
    props.onDataAndTimeChange(dataAndTimeValue);
  };

  const getCurrentDateandHour = () => {

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = today.getFullYear();
    const minutes = today.getMinutes();
    const hour = today.getHours();
    const currentDate = year + '-' + month + '-' + day + "T" + hour + ":" + minutes;
    
    return currentDate
  };




  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Choose Date"
        type="datetime-local"
        defaultValue={getCurrentDateandHour()}
        className={classes.textField}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

export { DateAndTimePickers };