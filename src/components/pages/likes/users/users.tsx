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
    likedUsers,
    handleSetUserIndex,
    handleRemoveUserIndex,
    userIndex,
    handleUnlikeUser } = useLikesUsers()
 
  if ( !likedUsers.length ) {

    return <EmptyUsers />
  }

  const renderUsers = () => {
    const mappedUsers = likedUsers.map((user, index) => (
      <motion.div
        variants={ itemVariant }
        key={ `home-user-${ user.email }-${ index }` }>
        <UsersItem 
          user={ user }
          onClick={ () => handleSetUserIndex(index) }
          onUnlike={ handleUnlikeUser } />
      </motion.div>
    ))

    return mappedUsers
  }
  
  return (
    <>
      { likedUsers.length !== 0 && (
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
        users={ likedUsers }
        userIndex={ userIndex }
        handleRemoveUserIndex={ handleRemoveUserIndex }
        handleSetUserIndex={ handleSetUserIndex }>
        <IonButton 
          onClick={ () => handleUnlikeUser() }
          className="normal-case mr-2">Unlike user
        </IonButton>
      </UserModal>
    </>
  )
}


export default Users