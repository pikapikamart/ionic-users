import { 
  Redirect, 
  Route } from 'react-router-dom'
import { 
  IonApp, 
  IonIcon, 
  IonRouterOutlet, 
  IonTabBar, 
  IonTabButton, 
  IonTabs, 
  setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { 
  heartOutline, 
  trashOutline } from "ionicons/icons"


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import "./theme/tailwind.css"
import { HomePage } from './pages/home'
import { 
  QueryClient, 
  QueryClientProvider } from '@tanstack/react-query'
import { TabCreateArticleIcon } from './components/svgs/tabCreateArticle'
import { LikesPage } from './pages/likes'


setupIonicReact()

const queryClient = new QueryClient()

const App: React.FC = () => (
  <QueryClientProvider client={ queryClient }>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path='/' to="/home" />
            <Route exact path="/likes">
              <LikesPage />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/removed">
              <HomePage />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton 
              tab="likes" 
              href="/likes"
              className='bg-white'>
              <IonIcon icon={ heartOutline } />
            </IonTabButton>
            <IonTabButton 
              tab="home" 
              href="/home"
              className='bg-white'>
              <TabCreateArticleIcon />
            </IonTabButton>
            <IonTabButton 
              tab="removed" 
              href="/removed"
              className='bg-white'>
              <IonIcon icon={ trashOutline } />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </QueryClientProvider>
)

export default App
