import { IonButton, IonList, IonToast } from "@ionic/react"
import { useHomeUsers } from "./hook"
import { UsersItem } from "./user"
import { 
  AnimatePresence, 
  motion } from "framer-motion"
import { UserModal } from "@/components/modal/user"
import { useAppSelector } from "@/store/hook"
import { selectUsers } from "@/store/slices/users"


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
    userIndex,
    handleAddUserToLikes,
    isUserAdded,
    isUserAlreadyLiked } = useHomeUsers()
  const { likedUsers } = useAppSelector(selectUsers)
 
  const renderUsers = () => {
    const mappedUsers = users.map((user, index) => (
      <motion.div
        variants={ itemVariant }
        key={ `home-user-${ user.email }-${ index }` }>
        <UsersItem 
          user={ user }
          onRemove={ handleRemoveUser }
          onClick={ () => handleSetUserIndex(index) }
          isLiked={ !!likedUsers.find(likedUser => likedUser.email===user.email) } />
      </motion.div>
    ))

    return mappedUsers
  }
  
  return (
    <>
      { users.length !== 0 && (
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
        users={ users }
        userIndex={ userIndex }
        handleRemoveUserIndex={ handleRemoveUserIndex }
        handleSetUserIndex={ handleSetUserIndex }>
        <IonButton 
          onClick={ () => userIndex!==null && likedUsers.find(likedUser => likedUser.email===users[userIndex].email)? null : handleAddUserToLikes() }
          className="normal-case mr-2">{ userIndex!==null && likedUsers.find(likedUser => likedUser.email===users[userIndex].email)? "User liked" : "Add user to likes" }
        </IonButton>
        <IonButton 
          color="danger"
          onClick={ () => userIndex !== null && handleRemoveUser(users[userIndex].email) }
          className="normal-case">Remove user
        </IonButton>
      </UserModal>
      <IonToast
          isOpen={ isUserAdded }
          position="top"
          color="primary"
          message="User added to likes"
          duration={1000}  />
        <IonToast
          isOpen={ isUserAlreadyLiked }
          position="top"
          message="User already added to likes"
          color="danger"
          duration={1000}  />
    </>
  )
}


export default Users