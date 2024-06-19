'use client'
// import { useAppContext } from '@/app/AppProvider'
import accountApiRequest from '@/app/apiRequests/account'
import envConfig from '@/config'
import React from 'react'
import { useEffect } from 'react'


export default function Profile() {
  // const {sessionToken} = useAppContext()
  
  useEffect(() => {
    const fetchRequest = async () => {
      const result = await accountApiRequest.meClient()  
      console.log('page app/me/profile result', result)
    }
    fetchRequest()

  }, [])
  return (
    <div>Profile</div>
  )
}
