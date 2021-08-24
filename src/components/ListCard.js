import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DelButton from './DelButton';
import { Draggable } from 'react-beautiful-dnd';

const ListCard = ({ text, id, index }) => {
function displayTime() {
    let str = "";

    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM"
    } else {
        str += "AM"
    }
    return str;
}

  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <Card
          style={styles.cardContainer}
          draggable={true}
    >
          <CardContent>
              <Typography gutterBottom style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
             {text} <blockquote><small>edited at - {displayTime()}</small></blockquote>
            </Typography>
          </CardContent>
          {/* <DelButton/> */}
        </Card>
        </div>  
      )}
      
    </Draggable>  
  );
}

const styles = {
  cardContainer: {
    marginBottom: 8,
    color: '#1b262c',
    display: 'flex',
    justifyContent: 'space-between',
    cursor:'grab'
  }
 }

export default ListCard;