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

  const handleSetUserIndex = ( index: number ) =>{
    setUserIndex(index)
  }

  const handleRemoveUserIndex = () =>{
    setUserIndex(null)
  }

  const handleUnlikeUser = (email?: string) => {
    if ( userIndex === null && !email ) {

      return
    }

    if ( email ) {

      return dispatch(removeLikedUser(email))
    }

    if ( userIndex !== null ) {

      dispatch(removeLikedUser(likedUsers[userIndex].email))
      
      if ( likedUsers.length===1 ) {
        setUserIndex(null)
      } else if ( likedUsers.length === userIndex+1 ) {
        setUserIndex(userIndex-1)
      }
    }

 
  }

  return {
    likedUsers,
    handleSetUserIndex,
    handleRemoveUserIndex,
    userIndex,
    handleUnlikeUser
  }
}