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
  onLike: ( email?: string ) => void
}

const User = ({ 
  user, 
  onRemove, 
  onClick,
  isLiked,
  onLike }: UserProps) =>{

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
        <IonItemOption
          onClick={ () => isLiked? null : onLike(user.email) }
          className="normal-case" >{ isLiked? "Liked" : "Like" }
        </IonItemOption>
        <IonItemOption 
          className="normal-case"
          color="danger"
          onClick={ () => onRemove(user.email) }>Remove</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}


export default User