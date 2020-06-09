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

function DateAndTimePickers(props:any) {
  const [dataAndTimeValue, setDataAndTimeValue ] = useState('');
  const classes = useStyles();

  const handleChange = (event:any) => {
    setDataAndTimeValue(event.target.value);
    props.onDataAndTimeChange(dataAndTimeValue);
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Choose Date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
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