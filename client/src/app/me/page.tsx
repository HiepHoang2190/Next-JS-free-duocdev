import envConfig from '@/config';
import React from 'react'
import { cookies } from 'next/headers'
import Profile from '@/app/me/profile';
import accountApiRequest from '@/app/apiRequests/account';

export default async function MeProfile() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  console.log('page app/me/page',sessionToken)
  const result = await accountApiRequest.me(sessionToken?.value ?? '')
  console.log('page app/me/page result',result)
  return (
    <div>
      <h1>Profile</h1>
      <div>Xin chào {result.payload.data?.name}</div>
      <Profile/>
    </div>
  )
}
