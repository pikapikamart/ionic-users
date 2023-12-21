import axios from "axios"
import { useAppQuery } from "../../../lib/useAppQuery"
import { useState } from "react"
import { TUser } from "./user/types"


type QueryData = { 
  results: TUser[]
}

export type HandleRemoveUser = ( email: string ) => void

export const useHomeUsers = () =>{
  const [ users, setUsers ] = useState<TUser[]>([])
  useAppQuery({
    queryKey: ["users"],
    queryFn: async () => await axios.get<QueryData>("https://randomuser.me/api/?results=100"),
    onSuccess: data => {
      setUsers(data.data.results)
    },
    refetchOnWindowFocus: false
  })

  const handleRemoveUser: HandleRemoveUser = ( email ) => {
    setUsers(prev => prev.filter(user => user.email !== email))
  }
  
  return {
    users,
    handleRemoveUser
  }
}