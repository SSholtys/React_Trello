import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { Button, Card } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import {addCard, addList} from '../actions'

class AddBtn extends React.Component {
  state = {
    formOpen: false,
    text: " "
  };

  openForm = () => {
    this.setState({
      formOpen: true
    })
  };

  closeForm = (e) => {
    this.setState({
      formOpen: false
    })
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value
    })
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      dispatch(addList(text))
    }
    return
  }

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      dispatch(addCard(listID, text))
    }
    return
  }

  renderAddBtn = () => {
    
    const { list } = this.props

    const buttonTextOpacity = list ? 1 : 0.5
    const buttonTextColor = list ? "white" : "inherit"

    return (
      <div
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
        }}
        onClick={this.openForm}>
        <Fab size="small" color="inherit" aria-label="add" >
          <AddIcon />
        </Fab>
      
      </div>
    )
  }
  render() {
    return this.renderAddBtn()
  }

  renderForm = () => {
    const { list } = this.props
    const placeholder = list ? "Enter list title" : "Enter a card title"
    const buttonTitle = list ? "Add List" : "Add Card"


    return (
      <div>
        <Card style={{
          overflow: 'visible',
          minHeight: 45,
          minWidth: 200,
          padding: '6px 8px 2px'
        }}>
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: 'none',
              width: '100%',
              outline: 'none',
              border: 'none'
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant='contained'
            style={{ color: 'white', backgroundColor: '#5aac44'}}
          >
            {buttonTitle}{''}

          </Button>
        </div>
      </div>
    )
  }
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddBtn() 
  }
}
const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    paddingLeft: 10,
    backgroundColor: 'transparent'
  }
}

export default connect()(AddBtn)