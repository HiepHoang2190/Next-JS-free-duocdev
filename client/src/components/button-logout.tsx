'use client'


import authApiRequest from '@/app/apiRequests/auth'
import { useAppContext } from '@/app/AppProvider'
import { Button } from '@/components/ui/button'
import { handleErrorApi } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
export default function ButtonLogout() {
  const {user} = useAppContext()
  // console.log(user)
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
      localStorage.removeItem('sessionToken')
      localStorage.removeItem('sessionTokenExpiresAt')
    }
  }
  return (
    <Button size={'sm'} onClick={handleLogout}> Đăng xuất</Button>
  )
}
// function useAppContext(): { user: any } {
//   throw new Error('Function not implemented.')
// }

