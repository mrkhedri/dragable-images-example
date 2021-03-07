export interface UpdateUserSort {
  readonly type: string;
  readonly payload: null | Array<any>;
}

export interface AddUser {
  readonly type: string;
  readonly payload: number;
}

export interface RemoveUser {
  readonly type: string;
  readonly payload: number;
}

export type ActionTypes = UpdateUserSort | AddUser | RemoveUser;

// Types
export const UPDATE_USER_SORT = 'UPDATE_USER_SORT'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

// Actions
export const updateUserSort = (payload: UpdateUserSort["payload"]) => ({ type: UPDATE_USER_SORT, payload })

export const addUser = (payload: AddUser["payload"], currentUsers: Array<any>) => {
  const newUser: string[] = [String(payload)]

  if (payload === 5) newUser.push('Amin')
  if (payload === 6) newUser.push('Reyhaneh')

  return { type: ADD_USER, payload: [...currentUsers, newUser] }
}

export const removeUser = (payload: AddUser["payload"], currentUsers: Array<any>) => {
  const newUsers: string[] = currentUsers.filter(user => {
    return Number(user[0]) !== payload
  })

  return { type: ADD_USER, payload: newUsers }
}
