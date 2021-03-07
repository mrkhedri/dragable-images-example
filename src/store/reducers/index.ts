import { combineReducers } from 'redux'

import { ActionTypes, UPDATE_USER_SORT, ADD_USER } from '../actions'

const initialState = {
  userSortConfig: null,
  users: [
    ['1', 'MohammadReza'],
    ['2', 'Mehran'],
    ['3', 'Hamed'],
    ['4', 'MohammadHossein'],
  ]
}

interface State {
  userSortConfig: null | number[];
  users: null | [string, string]
}

const chatReducer = (state: State, action: ActionTypes) => {
  if (typeof state === 'undefined') return initialState

  console.log('action -> ', action)

  switch (action.type) {
    case UPDATE_USER_SORT:
      return {
        ...state,
        userSortConfig: action.payload
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
