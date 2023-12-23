import { LikesUsersSection } from "@/components/pages/likes/users"
import { 
  IonContent, 
  IonPage } from "@ionic/react"


const Likes = () =>{

  return (
    <IonPage>
      <IonContent className="background:bg-white bg-white">
        <main className="bg-white">
          <LikesUsersSection />
        </main>
      </IonContent>
    </IonPage>
  )
}


export default Likes