// App provider xài context api để lấy session token
// 'use client'
// import {createContext, useContext, useState} from 'react'

// // interface AppContextType {
// //   sessionToken: string ;
// //   setSessionToken: (state: string) => void;
// // }
// // const AppContext = createContext<AppContextType | undefined>(undefined);

// const AppContext = createContext({
//   sessionToken: '',
//   setSessionToken: (sessionToken: string) => {}
// })


// export const useAppContext = () => {
//   const context = useContext(AppContext)
//   if(!context) {
//     throw new Error('useAppContext must be used within an AppProvider')

//   }
//   return context
// }

// export default function AppProvider({children, 
//   inititalSessionToken = ''}: {
//     children : React.ReactNode,
//     inititalSessionToken?: string
//   }) {
//  const [sessionToken, setSessionToken] = useState(inititalSessionToken)
//  return (
//   <AppContext.Provider  value={{ sessionToken, setSessionToken }}>
//     {children}
//   </AppContext.Provider>
//  )
// }