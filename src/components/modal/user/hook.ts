import { useQueryUsers } from "@/components/lib/useQueryUsers"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { addLikedUser, selectUsers } from "@/store/slices/users"
import { GestureDetail, createGesture } from "@ionic/react"
import { 
  useEffect,
  useRef, 
  useState } from "react"


export const useUserModal = (userIndex: number | null, handleSetUserIndex: (index: number) => void) =>{
  const modal = useRef<HTMLIonModalElement>(null)
  const [ modalContent, setModalContent ] = useState<HTMLDivElement | null>(null)
  const gestureAction = useRef<"prev" | "next" | null>(null)
  const { users } = useQueryUsers()
  const [ isUserAdded, setIsUserAdded ] = useState(false)
  const [ isUserAlreadyLiked, setIsUserAlreadyLiked ] = useState(false)
  const { likedUsers } = useAppSelector(selectUsers)
  const dispatch = useAppDispatch()

  const onMove = (detail: GestureDetail) => {
    const { deltaX } = detail
  
    if ( deltaX < 100 ) {
      gestureAction.current = "next"
    } else if ( deltaX > -100 ) {
      gestureAction.current = "prev"
    }
  }
  
  const onEnd = () =>{
    if ( userIndex===null ) {

      return
    }

    switch(gestureAction.current) {
      case "next":
        handleSetUserIndex(userIndex !== 99? (userIndex+1) : userIndex)
        return 
      case "prev":
        handleSetUserIndex(userIndex!==0? (userIndex-1) : userIndex)
        return 
    }
  }

  const handleAddUserToLikes = () =>{
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
    if (modalContent) {
      const target = modalContent.closest('ion-content')
      
      if (target) {
        const gesture = createGesture({
          el: target,
          onMove: (detail) => onMove(detail),
          onEnd: () => onEnd(),
          gestureName: 'example',
        })

        gesture.enable()
      }
    }
  }, [modalContent, userIndex])

  useEffect(() => {
    if ( isUserAdded || isUserAlreadyLiked ) {
      const timeout = setTimeout(() => {
        setIsUserAdded(false)
        setIsUserAlreadyLiked(false)
      }, 3000)  

      return () => clearTimeout(timeout)
    }
  }, [isUserAdded, isUserAlreadyLiked])

  return {
    modal,
    modalContent,
    setModalContent,
    handleAddUserToLikes,
    isUserAdded,
    isUserAlreadyLiked
  }
}