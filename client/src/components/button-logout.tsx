'use client'
import authApiRequest from '@/app/apiRequests/auth'
import { Button } from '@/components/ui/button'
import { handleErrorApi } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function ButtonLogout() {
  const router = useRouter()
  const pathname = usePathname()
  const handleLogout = async() => {
    try {
      await authApiRequest.logoutFromNextClientToNextServer()
      router.push('/login')
    } catch (error) {
      handleErrorApi({
        error
      })
      authApiRequest.logoutFromNextClientToNextServer(true).then(res=>{
        router.push(`/login?redirectFrom=${pathname}`)
      })
    } finally {
      router.refresh()
    }
  }
  return (
    <Button size={'sm'} onClick={handleLogout}> Đăng xuất</Button>
  )
}
