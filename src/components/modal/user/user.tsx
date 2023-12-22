import { useQueryUsers } from "@/components/lib/useQueryUsers"
import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonImg, 
  IonModal, 
  IonText,
  IonToolbar} from "@ionic/react"
import { arrowBackOutline } from "ionicons/icons"
import { useRef } from "react"


type UserProps = {
  userIndex: number | null
  handleRemoveUserIndex: VoidFunction
}

const User = ({ userIndex, handleRemoveUserIndex }: UserProps) =>{
  const { users } = useQueryUsers()
  const modal = useRef<HTMLIonModalElement>(null)
  const user = users && userIndex!==null? users[userIndex] : undefined

  return (
    <IonModal
      ref={ modal }
      isOpen={ userIndex!==null }>
      <IonHeader className="bg-[#f8f7de] transparent-bg no-shadow px-4">
        <IonToolbar className="bg-[#f8f7de] transparent-bg">
          <IonButtons>
            <IonButton onClick={ handleRemoveUserIndex }>
              <IonIcon
                className="text-blue-600 w-6 h-6" 
                icon={ arrowBackOutline } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background:bg-[#f8f7de]">
        { user && (
        <div className="py-8 px-4">
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
            <IonButton 
              className="normal-case mr-2">Add to likes</IonButton>
            <IonButton 
              color="danger"
              className="normal-case">Remove user</IonButton>
          </div>
        </div>
        ) }
      </IonContent>
    </IonModal>
  )
}


export default User