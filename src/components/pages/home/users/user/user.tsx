import { 
  IonAvatar,
  IonImg,
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel} from "@ionic/react"
import { TUser } from "./types"
import { HandleRemoveUser } from "../hook"


export type UserProps = {
  user: TUser,
  onRemove: HandleRemoveUser
}

const User = ({ user, onRemove }: UserProps) =>{

  return (
    <IonItemSliding>
      <IonItem>
        <IonAvatar slot="start">
          <IonImg
            src={ user.picture.thumbnail }
            alt={ `${ user.name.first } ${ user.name.last }` } />
        </IonAvatar>
        <IonLabel>{ user.name.first } { user.name.last }</IonLabel>
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