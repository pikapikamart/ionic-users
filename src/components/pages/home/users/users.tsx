import { IonList } from "@ionic/react"
import { useHomeUsers } from "./hook"
import { UsersItem } from "./user"
import { 
  AnimatePresence, 
  motion } from "framer-motion"


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
    handleRemoveUser } = useHomeUsers()
 
  const renderUsers = () => {
    const mappedUsers = users.map((user, index) => (
      <motion.div
        variants={ itemVariant }
        key={ `home-user-${ user.email }-${ index }` }>
        <UsersItem 
          user={ user }
          onRemove={ handleRemoveUser } />
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
    </>
  )
}


export default Users