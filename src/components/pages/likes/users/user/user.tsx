import { 
  IonAvatar,
  IonImg,
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel} from "@ionic/react"
import { User as TUser } from "@/store/slices/users"
import { HandleRemoveUser } from "../hook"


export type UserProps = {
  user: TUser,
  onRemove: HandleRemoveUser,
  onClick: VoidFunction 
}

const User = ({ user, onRemove, onClick }: UserProps) =>{

  return (
    <IonItemSliding>
      <IonItem 
        onClick={ onClick } 
        className="white-bg">
        <IonAvatar slot="start">
          <IonImg
            src={ user.picture.thumbnail }
            alt={ `${ user.name.first } ${ user.name.last }` } />
        </IonAvatar>
        <IonLabel className="!text-gray-950">{ user.name.first } { user.name.last }</IonLabel>
      </IonItem>
      <IonItemOptions>
        <IonItemOption>Save</IonItemOption>
        <IonItemOption 
          color="danger"
          onClick={ () => onRemove(user.email) }>Remove</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}


export default User