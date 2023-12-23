import { useState } from "react"
import { 
  removeLikedUser, 
  selectUsers } from "@/store/slices/users"
import { 
  useAppDispatch, 
  useAppSelector } from "@/store/hook"


export type HandleRemoveUser = ( email: string ) => void

export const useLikesUsers = () =>{
  const { likedUsers } = useAppSelector(selectUsers)
  const dispatch = useAppDispatch()
  const [ userIndex, setUserIndex ] = useState<null | number>(null)

  const handleRemoveUser: HandleRemoveUser = ( email ) => {
    dispatch(removeLikedUser(email))
  }

  const handleSetUserIndex = ( index: number ) =>{
    setUserIndex(index)
  }

  const handleRemoveUserIndex = () =>{
    setUserIndex(null)
  }

  return {
    likedUsers,
    handleRemoveUser,
    handleSetUserIndex,
    handleRemoveUserIndex,
    userIndex 
  }
}