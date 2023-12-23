import axios from "axios"
import { useAppQuery } from "../../../lib/useAppQuery"
import { 
  useEffect, 
  useState } from "react"
import { 
  User, 
  addLikedUser, 
  addRemovedUser, 
  removeLikedUser, 
  selectUsers, 
  setUsers} from "@/store/slices/users"
import { 
  useAppDispatch, 
  useAppSelector } from "@/store/hook"


type QueryData = { 
  results: User[]
}

export type HandleRemoveUser = ( email: string ) => void

export const useHomeUsers = () =>{
  const { users } = useAppSelector(selectUsers)
  const dispatch = useAppDispatch()
  useAppQuery({
    queryKey: ["users"],
    queryFn: async () => await axios.get<QueryData>("https://randomuser.me/api/?results=100"),
    onSuccess: data => {
      dispatch(setUsers(data.data.results))
    },
    refetchOnWindowFocus: false
  })
  const [ userIndex, setUserIndex ] = useState<null | number>(null)
  const { likedUsers } = useAppSelector(selectUsers)
  const [ isUserAdded, setIsUserAdded ] = useState(false)
  const [ isUserAlreadyLiked, setIsUserAlreadyLiked ] = useState(false)

  const handleRemoveUser: HandleRemoveUser = ( email ) => {
    const foundUser = users.find(user => user.email===email)

    if ( !foundUser ) {

      return
    }

    dispatch(addRemovedUser(foundUser))

    if ( likedUsers.find(user => user.email===foundUser.email) ) {
      dispatch(removeLikedUser(foundUser.email))
    }

    if ( userIndex !== null ) {

      if ( users.length===1 ) {
        setUserIndex(null)
      } else if ( users.length === userIndex+1 ) {
        setUserIndex(userIndex-1)
      }
    }
  }

  const handleSetUserIndex = ( index: number ) =>{
    setUserIndex(index)
  }

  const handleRemoveUserIndex = () =>{
    setUserIndex(null)
  }

  const handleAddUserToLikes = (email?: string) =>{
    if ( email ) {
      const foundUser = users.find(user => user.email===email)

      if ( foundUser ) {

        setIsUserAdded(true)
        return dispatch(addLikedUser( foundUser ))
      }
    }

    if ( !users || userIndex===null ) {

      return
    }

    const foundUser = users[userIndex]

    if ( likedUsers.find(user => user.email===foundUser.email) ) {
      
      return setIsUserAlreadyLiked(true)
    }

    dispatch(addLikedUser(foundUser))

    return setIsUserAdded(true)
  }

  useEffect(() => {
    if ( isUserAdded || isUserAlreadyLiked ) {
      const timeout = setTimeout(() => {
        setIsUserAdded(false)
        setIsUserAlreadyLiked(false)
      }, 1000)  

      return () => clearTimeout(timeout)
    }
  }, [isUserAdded, isUserAlreadyLiked])

  return {
    users,
    handleRemoveUser,
    handleSetUserIndex,
    handleRemoveUserIndex,
    userIndex,
    handleAddUserToLikes,
    isUserAdded,
    isUserAlreadyLiked
  }
}