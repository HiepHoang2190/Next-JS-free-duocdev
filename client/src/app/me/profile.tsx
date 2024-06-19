'use client'
import { useAppContext } from '@/app/AppProvider'
import envConfig from '@/config'
import React from 'react'
import { useEffect } from 'react'

export default function Profile() {
  const {sessionToken} = useAppContext()
  useEffect(() => {
    const fetchRequest = async () => {
      const result = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
        {
        
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${sessionToken}`
          },
          method: "GET",
        }
      ).then(async (res) => {
        // console.log(res)
        const payload = await res.json()
        const data = {
          status: res.status,
          payload,
        };
        if (!res.ok) {
          throw data
        }
        return data
        
      })
      
      console.log('page app/me/profile result', result)
    }
    fetchRequest()

  }, [sessionToken])
  return (
    <div>Profile</div>
  )
}
