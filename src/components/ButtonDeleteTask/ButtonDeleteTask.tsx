import React from 'react';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

interface ButtonDeleteProps {
    removeTask: (taskToDelete:any) => any,
    taskToDelete: any,
};

 function ButtonClose(props:ButtonDeleteProps) {
  
    const classes = useStyles();
   
console.log('delete', props.taskToDelete)
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => props.removeTask(props.taskToDelete)}>
        Delete
      </Button>
    </div>
  );
};

const mapStateToProps = (state:any) => ({
  taskToDelete: state.taskModalData
});

const mapDispatchToProps = (dispatch:any) => ({
  actionToggleModal: () => dispatch({type: ACTION_TYPES.SET_TASK_MODAL_DATA}),
  removeTask: (taskToDelete:any) => dispatch({type: ACTION_TYPES.REMOVE_TASK, value: taskToDelete }),
});

export default connect(mapStateToProps,mapDispatchToProps)(ButtonClose);