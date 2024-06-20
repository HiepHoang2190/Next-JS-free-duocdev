'use client'
import authApiRequest from '@/app/apiRequests/auth'
import { clientSessionToken } from '@/lib/http'
import React, { useEffect } from 'react'
import { differenceInHours } from 'date-fns'
export default function SlideSession() {
  useEffect(() => {
    const interval = setInterval( async () => {
      const now = new Date()
      const expiresAt = new Date(clientSessionToken.expiresAt)

      if(differenceInHours(expiresAt, now) < 1) {
        const res = await authApiRequest.slideSessionFromNextClientToNextServer()
        clientSessionToken.expiresAt = res.payload.data.expiresAt
      }
    
    }, 1000*60*60)
    return () => clearInterval(interval)
  },[])
  
  // const slideSession = async() => {
  //   const res = await authApiRequest.slideSessionFromNextClientToNextServer()
  //   clientSessionToken.expiresAt = res.payload.data.expiresAt
  // }
  return (
    <div>
      {/* <button onClick={slideSession}>
        Click to slide session
      </button> */}
    </div>
  )
}
