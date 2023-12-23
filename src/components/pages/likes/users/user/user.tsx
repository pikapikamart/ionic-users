import { 
  IonAvatar,
  IonImg,
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel} from "@ionic/react"
import { User as TUser } from "@/store/slices/users"


export type UserProps = {
  user: TUser,
  onClick: VoidFunction,
  onUnlike: ( email?: string ) => void
}

const User = ({ user, onClick, onUnlike }: UserProps) =>{

  return (
    <IonItemSliding>
      <IonItem 
        onClick={ onClick } 
        className="native:bg-[#f8f7de]">
        <IonAvatar slot="start">
          <IonImg
            src={ user.picture.thumbnail }
            alt={ `${ user.name.first } ${ user.name.last }` } />
        </IonAvatar>
        <IonLabel className="!text-gray-950">{ user.name.first } { user.name.last }</IonLabel>
      </IonItem>
      <IonItemOptions>
        <IonItemOption
          className="normal-case" 
          onClick={ () => onUnlike(user.email) }>Unlike</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}


export default User