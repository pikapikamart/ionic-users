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
import { HeartIcon } from "@/components/svgs/heart"


export type UserProps = {
  user: TUser,
  onRemove: HandleRemoveUser,
  onClick: VoidFunction,
  isLiked?: boolean
}

const User = ({ 
  user, 
  onRemove, 
  onClick,
  isLiked }: UserProps) =>{

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
        { isLiked && (
          <div className="h-4 w-4">
            <HeartIcon />
          </div>
        ) }
      </IonItem>
      <IonItemOptions>
        <IonItemOption>Like</IonItemOption>
        <IonItemOption 
          color="danger"
          onClick={ () => onRemove(user.email) }>Remove</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}


export default User