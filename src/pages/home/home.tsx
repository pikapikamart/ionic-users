import { 
  IonContent, 
  IonPage } from "@ionic/react"
import { HomeUsersSection } from "../../components/pages/home/users"


const Home = () => {

  return (
    <IonPage>
      <IonContent>
        <main>
          <HomeUsersSection />
        </main>
      </IonContent>
    </IonPage>
  )
}


export default Home