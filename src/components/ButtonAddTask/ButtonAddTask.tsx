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
  onClicked: () => void,
};

 function ButtonAddTask(props:ButtonAddTaskProps) {
  const classes = useStyles();

  const handleClick = () => {
    props.onClicked();
    props.actionToggleModal();
  }

  return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<PlaylistAddCheckIcon />}
        onClick={handleClick}
      >
        Add Task
      </Button>
     
  );
};

const mapDispatchToProps = (dispatch:any) => ({
  actionToggleModal: () => dispatch({type: ACTION_TYPES.TOGGLE_MODAL}),
});

export default connect(null,mapDispatchToProps)(ButtonAddTask);