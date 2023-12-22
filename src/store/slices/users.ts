import { 
  CaseReducer, 
  PayloadAction, 
  createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { 
  addLikedUserReducer, 
  removedLikedUserReducer } from "../reducers/users";


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
  likedUsers: User[]
  removedUsers: User[]
}

const initialState: InitialState = {
  likedUsers: [],
  removedUsers: []
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addLikedUser: addLikedUserReducer,
    removeLikedUser: removedLikedUserReducer
  },
})

export const { 
  addLikedUser,
  removeLikedUser } = userSlice.actions
export const selectUser = ( state: RootState ) => state.users


export type UsersReducer<T> = CaseReducer<InitialState, PayloadAction<T>>

export default userSlice.reducer