import envConfig from '@/config';
import React from 'react'
import { cookies } from 'next/headers'
import Profile from '@/app/me/profile';
import accountApiRequest from '@/app/apiRequests/account';
import ProfileForm from '@/app/me/profile-form';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Hồ sơ người dùng',
  description: "Được tạo bởi Lotus Dev",
};

export default async function MeProfile() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  // console.log('page app/me/page',sessionToken)
  // Vì dùng cookie nên api này không được cached trên server
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching
  const result = await accountApiRequest.me(sessionToken?.value ?? '')
  // console.log('page app/me/page result',result)
  return (
    <div>
      <h1>Profile</h1>
      {/* <div>Xin chào {result.payload.data?.name}</div> */}
      {/* <Profile/> */}
      <ProfileForm  profile={result.payload.data}/>
    </div>
  )
}
