import { 
  IonContent, 
  IonPage } from "@ionic/react"
import { HomeUsersSection } from "../../components/pages/home/users"


const Home = () => {

  return (
    <IonPage>
      <IonContent className="background:bg-white bg-white">
        <main className="bg-white">
          <HomeUsersSection />
        </main>
      </IonContent>
    </IonPage>
  )
}


export default Home