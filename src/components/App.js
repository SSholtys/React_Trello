import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux"
import Header from "./Header";
import AddBtn from "./AddBtn";
import { DragDropContext } from "react-beautiful-dnd"
import {sort} from "../actions"

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result
    
    if (!destination) {
      return
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )
  }

  render() {

    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <div style={styles.mainContainer}>
          <Header/>
          <h1 style={styles.title}>React Trello</h1>
          <div style={styles.listContainer}>
          {lists.map(list => (
            <List
              listID={list.id}
              title={list.title}
              cards={list.cards} />
          ))}
            <AddBtn list/>
          </div>
        </div>
      </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 32,
    paddingRight: 32
  },
  mainContainer: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    backgroundColor: '#3282b8',
    minHeight: '100vh',
    width: '100vw'
  },
  title: {
    textAlign: 'center',
    color: 'white'
  }
};

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect (mapStateToProps) (App);
