import UsersIcon from "@/components/svgs/users"
import { IonText } from "@ionic/react"


const Empty = () =>{

  return (
    <div className="pt-6">
      <div className="rounded-full p-8 bg-gray-200 max-w-max mx-auto mb-8">
        <div>
          <UsersIcon />
        </div>
      </div>
      <div>
        <IonText className="text-center block">
          <h1 className="font-bold text-gray-800">No users on this tab</h1>
        </IonText>
      </div>
    </div>
  )
}


export default Empty