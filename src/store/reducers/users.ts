import { User, UsersReducer } from "../slices/users";


export const setUsersReducer: UsersReducer<User[]> = (state, action) =>{
  state.users = action.payload
}

export const addLikedUserReducer: UsersReducer<User> = (state, action) =>{
  state.likedUsers.push(action.payload)
}

export const removedLikedUserReducer: UsersReducer<User["email"]> = (state, action) => {
  state.likedUsers = state.likedUsers.filter(user => user.email!==action.payload)
}

export const addRemovedUserReducer: UsersReducer<User> = (state, action) => {
  state.removedUsers.push(action.payload)
  state.users = state.users.filter(user => user.email!==action.payload.email)
}

export const restoreUserReducer: UsersReducer<User> = (state, action) => {
  state.removedUsers = state.removedUsers.filter(user => user.email!==action.payload.email)
  state.users.push(action.payload)
}