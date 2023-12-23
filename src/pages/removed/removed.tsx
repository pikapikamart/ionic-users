import { RemovedUsersSection } from "@/components/pages/removed/users"
import { 
  IonContent, 
  IonPage } from "@ionic/react"


const Removed = () =>{

  return (
    <IonPage>
      <IonContent className="background:bg-[#f8f7de]">
        <main className="bg-[#f8f7de]">
          <RemovedUsersSection />
        </main>
      </IonContent>
    </IonPage>
  )
}


export default Removed