"use client";
import { useLayoutEffect } from "react"
import { AccountResType } from "@/schemaValidations/account.schema";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

type User = AccountResType['data']

const AppContext = createContext<{
  user: User | null
  setUser: (user: User | null)=> void
}>({
  user: null,
  setUser: () => {}
})
export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}
export default function AppProvider({
  children,
  inititalSessionToken = "",
  user: userProp
}: {
  children: React.ReactNode
  inititalSessionToken?: string,
  user: User | null
}) {
  // console.log(user)
  const [user, setUser] = useState<User | null>(userProp)
 
  return (
  <AppContext.Provider value={{
    user,
    setUser
  }}>
    { children }
  </AppContext.Provider>
  )

}
