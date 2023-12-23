import { IonList } from "@ionic/react"
import { useLikesUsers } from "./hook"
import { UsersItem } from "./user"
import { 
  AnimatePresence, 
  motion } from "framer-motion"
import { UserModal } from "@/components/modal/user"


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
    likedUsers,
    handleRemoveUser,
    handleSetUserIndex,
    handleRemoveUserIndex,
    userIndex } = useLikesUsers()
 
  const renderUsers = () => {
    const mappedUsers = likedUsers.map((user, index) => (
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
      { likedUsers.length !== 0 && (
        <IonList className="bg-white">
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
      <UserModal 
        userIndex={ userIndex }
        handleRemoveUserIndex={ handleRemoveUserIndex }
        handleSetUserIndex={ handleSetUserIndex } />
    </>
  )
}


export default Users