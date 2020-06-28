import React from 'react';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

interface ButtonCloseProps {
  
  actionToggleTaskModal: () => void,
}

 function ButtonClose(props:ButtonCloseProps) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<CancelRoundedIcon />}
        onClick={props.actionToggleTaskModal}
      >
        Close
      </Button>
     
    </div>
  );
};

const mapDispatchToProps = (dispatch:any) => ({
  actionToggleTaskModal: () => dispatch({type: ACTION_TYPES.SET_TASK_MODAL_DATA}),
  
});

export default connect(null,mapDispatchToProps)(ButtonClose);