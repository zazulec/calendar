import React from 'react';
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

 function ButtonClose() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<CancelRoundedIcon />}
      >
        Close
      </Button>
     
    </div>
  );
}

export { ButtonClose };