import { 
  useSelector, 
  TypedUseSelectorHook, 
  useDispatch } from "react-redux"
import { 
  AppDispatch, 
  RootState } from ".."


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector