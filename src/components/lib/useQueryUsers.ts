import axios from "axios"
import { useAppQuery } from "./useAppQuery"
import { User } from "@/store/slices/users"


type QueryData = {
  results: User[]
}

export const useQueryUsers = () =>{
  const { data } = useAppQuery({
    queryKey: ["users"],
    queryFn: async () => await axios.get<QueryData>("https://randomuser.me/api/?results=100"),
    refetchOnWindowFocus: false
  })

  return {
    users: data?.data.results
  }
}