import { combineReducers } from 'redux'

import { ActionTypes, UPDATE_USER_SORT, ADD_USER } from '../actions'

const initialState = {
  users: JSON.stringify([
    ['1', 'MohammadReza'],
    ['2', 'Mehran'],
    ['3', 'Hamed'],
    ['4', 'MohammadHossein'],
  ])
}

interface State {
  users: null | [string, string]
}

const chatReducer = (state: State, action: ActionTypes) => {
  if (typeof state === 'undefined') return initialState

  switch (action.type) {
    case UPDATE_USER_SORT:
      return {
        ...state,
        users: action.payload
      }

    case ADD_USER:
      return {
        ...state,
        users: action.payload
      }

    default:
      return state
  }
}

const rootReducers: any = combineReducers({ chat: chatReducer })

export default rootReducers
