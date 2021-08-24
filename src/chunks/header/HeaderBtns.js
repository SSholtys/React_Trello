import React from 'react';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {lightBlue } from '@material-ui/core/colors';


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(lightBlue[500]),
    backgroundColor: lightBlue[500],
    '&:hover': {
      backgroundColor: lightBlue[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function HeaderBtns() {
  const classes = useStyles();

  const styles = {
    btnContent: {
      padding: 0,
      margin: 0,
      color: "white"
    }
  }

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        <p style={styles.btnContent}>Home</p>
      </ColorButton>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        <p style={styles.btnContent}>About</p>
      </ColorButton>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
         <p style={styles.btnContent}>Contacts</p>
      </ColorButton>
    </div>

    
  );
  
}