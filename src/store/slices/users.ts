import { 
  CaseReducer, 
  PayloadAction, 
  createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { 
  addLikedUserReducer, 
  addRemovedUserReducer, 
  removedLikedUserReducer, 
  restoreUserReducer, 
  setUsersReducer} from "../reducers/users";


export type User = {
  cell: string
  dob: {
    date: string
    age: number
  }
  email: string
  gender: "female" | "male"
  id: {
    name: string
    value: string | null
  }
  location: {
    city: string
    state: string
    country: string
    postcode: number
    street: {
      number: number
      name: string
    }
  }
  name: {
    first: string
    last: string
    title: string
  }
  nat: string
  phone: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}

type InitialState = {
  users: User[]
  likedUsers: User[]
  removedUsers: User[]
}

const initialState: InitialState = {
  users: [],
  likedUsers: [],
  removedUsers: []
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: setUsersReducer,
    addLikedUser: addLikedUserReducer,
    removeLikedUser: removedLikedUserReducer,
    addRemovedUser: addRemovedUserReducer,
    restoreUser: restoreUserReducer
  },
})

export const { 
  setUsers,
  addLikedUser,
  removeLikedUser,
  addRemovedUser,
  restoreUser } = userSlice.actions
export const selectUsers = ( state: RootState ) => state.users


export type UsersReducer<T> = CaseReducer<InitialState, PayloadAction<T>>

export default userSlice.reducer