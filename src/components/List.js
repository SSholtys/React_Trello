import React from 'react'
import ListCard from './ListCard'
import AddBtn from './AddBtn'
import { Droppable } from 'react-beautiful-dnd'

const List =({title, cards, listID})=>{
  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
      <div {...provided.droppableProps} ref={provided.innerRef}  style={styles.container}>
        <div style={styles.topSection}>
          <h3>{title}</h3>
          <AddBtn listID={listID}/>
        </div>
          {cards.map((card, index) => <ListCard key={card.id} index={index} text={card.text} id={card.id} />)}
          {provided.placeholder}
      </div>
      )}
    
    </Droppable>
  )
}

const styles={
  container: {
    backgroundColor: '#DDDDDD',
    borderRadius: 8,
    color: '#1b262c',
    width: '30%',
    height: '100%',
    padding: 8,
    marginRight: 13
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight:15

  }
}

export default List