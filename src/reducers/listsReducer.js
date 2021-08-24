import { CONSTANTS } from '../actions'

let listID = 2;
let cardID = 4;

let initialState = [
  {
    title: 'First List',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'one card...',
      },
      {
        id: `card-${1}`,
        text: 'another card'
      }
    ]
  },
  {
    title: 'Second List',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'smth to do...'
      },
      {
        id: `card-${3}`,
        text: 'smth in process'
      },
      {
        id: `card-${3}`,
        text: 'smth I have to do soon'
      }
    ]
  }
  
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      }
      listID += 1
      return [...state, newList];
    
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      }
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })

      return newState

    default:
      return state;
  }
}

export default listsReducer