import { useState } from "react"
import { 
  removeLikedUser, 
  restoreUser, 
  selectUsers } from "@/store/slices/users"
import { 
  useAppDispatch, 
  useAppSelector } from "@/store/hook"


export type HandleRemoveUser = ( email: string ) => void

export const useLikesUsers = () =>{
  const { removedUsers } = useAppSelector(selectUsers)
  const dispatch = useAppDispatch()
  const [ userIndex, setUserIndex ] = useState<null | number>(null)

  const handleSetUserIndex = ( index: number ) =>{
    setUserIndex(index)
  }

  const handleRemoveUserIndex = () =>{
    setUserIndex(null)
  }

  const handleRestoreUser = (email?: string) => {
    if ( email ) {
      const foundUser = removedUsers.find(user => user.email===email)

      if ( foundUser ) {

        return dispatch(restoreUser(foundUser))
      }
    }

    if ( userIndex === null ) {

      return
    }


    if ( userIndex !== null ) {

      dispatch(restoreUser(removedUsers[userIndex]))
      
      if ( removedUsers.length===1 ) {
        setUserIndex(null)
      } else if ( removedUsers.length === userIndex+1 ) {
        setUserIndex(userIndex-1)
      }
    }

 
  }

  return {
    removedUsers,
    handleSetUserIndex,
    handleRemoveUserIndex,
    userIndex,
    handleRestoreUser
  }
}