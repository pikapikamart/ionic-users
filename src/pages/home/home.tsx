import { 
  IonContent, 
  IonPage } from "@ionic/react"
import { HomeUsersSection } from "../../components/pages/home/users"


const Home = () => {

  return (
    <IonPage>
      <IonContent className="background:bg-[#f8f7de]">
        <main className="bg-[#f8f7de]">
          <HomeUsersSection />
        </main>
      </IonContent>
    </IonPage>
  )
}


export default Home