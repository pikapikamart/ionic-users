import { 
  IonButton, 
  IonList } from "@ionic/react"
import { useLikesUsers } from "./hook"
import { UsersItem } from "./user"
import { 
  AnimatePresence, 
  motion } from "framer-motion"
import { UserModal } from "@/components/modal/user"
import { EmptyUsers } from "@/components/shared/users/empty"
import { containerVariant, itemVariant } from "@/components/shared/framer/variants/variants"


const Users = () => {
  const { 
    removedUsers,
    handleSetUserIndex,
    handleRemoveUserIndex,
    userIndex,
    handleRestoreUser } = useLikesUsers()
 
  if ( !removedUsers.length ) {

    return <EmptyUsers />
  }

  const renderUsers = () => {
    const mappedUsers = removedUsers.map((user, index) => (
      <motion.div
        variants={ itemVariant }
        key={ `home-user-${ user.email }-${ index }` }>
        <UsersItem 
          user={ user }
          onClick={ () => handleSetUserIndex(index) }
          onRestore={ handleRestoreUser } />
      </motion.div>
    ))

    return mappedUsers
  }
  
  return (
    <>
      { removedUsers.length !== 0 && (
        <IonList className="bg-transparent">
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
        users={ removedUsers }
        userIndex={ userIndex }
        handleRemoveUserIndex={ handleRemoveUserIndex }
        handleSetUserIndex={ handleSetUserIndex }>
        <IonButton 
          onClick={ () => handleRestoreUser() }
          className="normal-case mr-2">Restore
        </IonButton>
      </UserModal>
    </>
  )
}


export default Users