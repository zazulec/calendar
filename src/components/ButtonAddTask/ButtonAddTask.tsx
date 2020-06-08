import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

 function ButtonAddTask() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<PlaylistAddCheckIcon />}
      >
        Add Task
      </Button>
     
    </div>
  );
}

export { ButtonAddTask };