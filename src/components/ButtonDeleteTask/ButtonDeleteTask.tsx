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
    deleteTask?: () => void,
  
}

 function ButtonClose(props:ButtonDeleteProps) {
  
    const classes = useStyles();
    const deleteTask = () => {
        return alert('usunięto Task')
    };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={deleteTask}
        >
        Delete
      </Button>
     
    </div>
  );
};

const mapDispatchToProps = (dispatch:any) => ({
  actionToggleModal: () => dispatch({type: ACTION_TYPES.TOGGLE_TASK_MODAL}),
});

export default connect(null,mapDispatchToProps)(ButtonClose);