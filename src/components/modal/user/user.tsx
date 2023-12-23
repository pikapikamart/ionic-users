import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonImg, 
  IonModal, 
  IonText,
  IonToolbar } from "@ionic/react"
import { 
  arrowBackOutline, 
  informationCircle } from "ionicons/icons"
import { useUserModal } from "./hook"
import { User as TUser } from "@/store/slices/users"


type UserProps = {
  users: TUser[]
  userIndex: number | null
  handleRemoveUserIndex: VoidFunction
  handleSetUserIndex: ( index: number ) => void,
  children?: React.ReactNode
}

const User = ({
  users, 
  userIndex, 
  handleRemoveUserIndex,
  handleSetUserIndex,
  children }: UserProps) =>{
  const user = users && userIndex!==null? users[userIndex] : undefined
  const { 
    modal,
    setModalContent } = useUserModal(userIndex, handleSetUserIndex, users)

  return (
    <IonModal
      ref={ modal }
      isOpen={ userIndex!==null }>
      <IonHeader className="bg-[#f8f7de] transparent-bg no-shadow px-4">
        <IonToolbar className="bg-[#f8f7de] transparent-bg no-border">
          <IonButtons>
            <IonButton onClick={ handleRemoveUserIndex }>
              <IonIcon
                className="text-blue-600 w-6 h-6" 
                icon={ arrowBackOutline } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background:bg-[#f8f7de] relative">
        { user && (
        <div
          ref={ e => setModalContent(e) }
          className="py-8 px-4">
          <div className="max-w-max mx-auto rounded-full border-[3px] bg-white border-blue-600 p-1 mb-4">
            <IonImg
              className="image:rounded-full rounded-full"
              src={ user.picture.large }
              alt="" />
          </div>
          <div className="text-center mb-8">
            <div className="bg-white py-2 px-4 rounded border border-gray-500 max-w-max mx-auto mb-2 shadow-md">
              <IonText>
                <h3 className=" text-gray-950 font-bold text-xl">{ user.name.first } { user.name.last }</h3>
              </IonText>
            </div>
            <IonText>
              <p className="text-gray-900 text-base">{ user.location.city }, { user.location.state }, { user.location.country } </p>
            </IonText>
          </div>
          <div className="flex justify-center">
            { children }
          </div>
          <div className="absolute bottom-4 left-1/2 flex items-center -translate-x-1/2">
            <IonIcon
              className=" mr-2" 
              icon={ informationCircle } />
            <IonText className="text-sm text-gray-600 font-semibold">Swipe to change user</IonText>
          </div>
        </div>
        ) }
        
      </IonContent>
    </IonModal>
  )
}


export default User