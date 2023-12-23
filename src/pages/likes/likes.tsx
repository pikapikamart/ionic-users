import { LikesUsersSection } from "@/components/pages/likes/users"
import { 
  IonContent, 
  IonPage } from "@ionic/react"


const Likes = () =>{

  return (
    <IonPage>
      <IonContent className="background:bg-[#f8f7de]">
        <main className="bg-[#f8f7de]">
          <LikesUsersSection />
        </main>
      </IonContent>
    </IonPage>
  )
}


export default Likes