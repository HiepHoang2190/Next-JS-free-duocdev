'use client'

import authApiRequest from "@/app/apiRequests/auth";
import { clientSessionToken } from "@/lib/http";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParrams = useSearchParams()
  const sessionToken = searchParrams.get('sessionToken')
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    // console.log('page src/app/auth/logout sessiontToken', sessionToken)
    if(sessionToken === clientSessionToken.value) {
      authApiRequest.logoutFromNextClientToNextServer(true,signal).then(res=>{
        router.push(`/login?redirectFrom=${pathname}`)
      })
    }
    return () => {
      controller.abort()
    }
  },[sessionToken,router,pathname])
  return (
    <div>
      page
    </div>
  );
}