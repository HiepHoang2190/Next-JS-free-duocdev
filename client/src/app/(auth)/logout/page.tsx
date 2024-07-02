'use client'

import authApiRequest from "@/app/apiRequests/auth";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

function LogoutLogic() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParrams = useSearchParams()
  const sessionToken = searchParrams.get('sessionToken')
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    if(sessionToken === localStorage.getItem('sessionToken')) {
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

export default function LogoutPage() {
  return(
    <Suspense>
      <LogoutLogic />
    </Suspense>
  )
}
