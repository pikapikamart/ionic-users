import axios from "axios"
import { useAppQuery } from "../../../lib/useAppQuery"
import { useState } from "react"
import { User } from "@/store/slices/users"


type QueryData = { 
  results: User[]
}

export type HandleRemoveUser = ( email: string ) => void

export const useHomeUsers = () =>{
  const [ users, setUsers ] = useState<User[]>([])
  useAppQuery({
    queryKey: ["users"],
    queryFn: async () => await axios.get<QueryData>("https://randomuser.me/api/?results=100"),
    onSuccess: data => {
      setUsers(data.data.results)
    },
    refetchOnWindowFocus: false
  })
  const [ userIndex, setUserIndex ] = useState<null | number>(null)

  const handleRemoveUser: HandleRemoveUser = ( email ) => {
    setUsers(prev => prev.filter(user => user.email !== email))
  }

  const handleSetUserIndex = ( index: number ) =>{
    setUserIndex(index)
  }

  const handleRemoveUserIndex = () =>{
    setUserIndex(null)
  }

  return {
    users,
    handleRemoveUser,
    handleSetUserIndex,
    handleRemoveUserIndex,
    userIndex 
  }
}