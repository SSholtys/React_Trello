import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DelButton from './DelButton';

const ListCard = ({ text }) => {

  return (
    <div>
      <Card
      style={styles.cardContainer}
      draggable={true}
    >
      <CardContent>
        <Typography gutterBottom>
          {text}
        </Typography>
      </CardContent>
      <DelButton/>
    </Card>
    </div>
    
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