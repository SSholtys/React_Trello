import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextareaAutosize from 'react-textarea-autosize';
import { Card } from '@material-ui/core';
import { placeholder } from '@babel/types';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default function AddButton() {
  const classes = useStyles();
  
  function addCard() {
    console.log('works')
    return (
      <div>
        <Card>
          <TextareaAutosize
          autoFocus placeholder={placeholder}/>
        </Card>
      </div>)
  }
  

  return (
    <div>
      <div>
        <Fab size="small" color="#AAAAAA" aria-label="add" className={classes.margin} onClick={() => addCard()}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}