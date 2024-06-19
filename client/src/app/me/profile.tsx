'use client'
// import { useAppContext } from '@/app/AppProvider'
import accountApiRequest from '@/app/apiRequests/account'
import envConfig from '@/config'
import { handleErrorApi } from '@/lib/utils'
import React from 'react'
import { useEffect } from 'react'


export default function Profile() {
  // const {sessionToken} = useAppContext()
  
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const result = await accountApiRequest.meClient()
        // console.log('page app/me/profile result', result)
      } catch (error) {
        handleErrorApi({
          error
        })
      }
        
      
    }
    fetchRequest()

  }, [])
  return (
    <div>Profile</div>
  )
}
