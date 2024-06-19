"use client";
import { useLayoutEffect, useState } from "react"
import { clientSessionToken } from "@/lib/http"

export default function AppProvider({
  children,
  inititalSessionToken = "",
}: {
  children: React.ReactNode
  inititalSessionToken?: string
}) {
  useState(()=>{
    if(typeof window !== 'undefined') {
      clientSessionToken.value = inititalSessionToken
    }
   
  })
  // useLayoutEffect(() => {
  //   sessionToken.value = inititalSessionToken
  // }, [inititalSessionToken])
  return (
  <>
    { children }
  </>
  )

}
