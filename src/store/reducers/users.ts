import { User, UsersReducer } from "../slices/users";


export const addLikedUserReducer: UsersReducer<User> = (state, action) =>{
  state.likedUsers.push(action.payload)
}

export const removedLikedUserReducer: UsersReducer<User> = (state, action) => {
  state.likedUsers.filter(user => user.email!==action.payload.email)
}