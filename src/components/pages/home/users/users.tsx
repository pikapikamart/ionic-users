import { 
  IonContent,
  IonList, 
  IonModal } from "@ionic/react"
import { useHomeUsers } from "./hook"
import { UsersItem } from "./user"
import { 
  AnimatePresence, 
  motion } from "framer-motion"
import { useRef } from "react"


const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  },
  exit:{ opacity: 0 }
}

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0, x: -300  }
}

const Users = () => {
  const { 
    users,
    handleRemoveUser,
    handleSetUserIndex,
    handleRemoveUserIndex,
    userIndex } = useHomeUsers()
  const modal = useRef<HTMLIonModalElement>(null)
 
  const renderUsers = () => {
    const mappedUsers = users.map((user, index) => (
      <motion.div
        variants={ itemVariant }
        key={ `home-user-${ user.email }-${ index }` }>
        <UsersItem 
          user={ user }
          onRemove={ handleRemoveUser }
          onClick={ () => handleSetUserIndex(index) } />
      </motion.div>
    ))

    return mappedUsers
  }

  return (
    <>
      { users.length !== 0 && (
        <IonList>
          <motion.div
            variants={ containerVariant }
            initial="hidden"
            animate="show"
            exit="exit">
            <AnimatePresence>
              { renderUsers() }
            </AnimatePresence>
          </motion.div>
        </IonList>
      ) }
      <IonModal
        ref={ modal }
        isOpen={ userIndex!==null }>
        <IonContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, itaque.</p>
        </IonContent>
      </IonModal>
    </>
  )
}


export default Users