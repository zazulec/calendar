import React from 'react';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';
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

interface ButtonAddTaskProps {
  actionToggleModal: () => void,
};

 function ButtonAddTask(props:ButtonAddTaskProps) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<PlaylistAddCheckIcon />}
        onClick={props.actionToggleModal}
      >
        Add Task
      </Button>
     
    </div>
  );
};

const mapDispatchToProps = (dispatch:any) => ({
  actionToggleModal: () => dispatch({type: ACTION_TYPES.TOGGLE_MODAL}),
});

export default connect(null,mapDispatchToProps)(ButtonAddTask);