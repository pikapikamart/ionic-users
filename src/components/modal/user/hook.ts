import { User } from "@/store/slices/users"
import { 
  GestureDetail, 
  createGesture } from "@ionic/react"
import { 
  useEffect,
  useRef, 
  useState } from "react"


export const useUserModal = (
  userIndex: number | null, 
  handleSetUserIndex: (index: number) => void,
  users: User[]) =>{
  const modal = useRef<HTMLIonModalElement>(null)
  const [ modalContent, setModalContent ] = useState<HTMLDivElement | null>(null)
  const gestureAction = useRef<"prev" | "next" | null>(null)

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
        handleSetUserIndex(userIndex !== users.length-1? (userIndex+1) : userIndex)
        return 
      case "prev":
        handleSetUserIndex(userIndex!==0? (userIndex-1) : userIndex)
        return 
    }
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

  return {
    modal,
    modalContent,
    setModalContent,
  }
}