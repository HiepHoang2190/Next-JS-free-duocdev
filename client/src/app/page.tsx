import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import suffer from '../../public/images/suffer.png'
import Image from "next/image"
import Card from "@/app/Card"
import Link from "next/link"
import { constants } from "buffer"

import { redirect } from "next/navigation"
import type { Metadata } from "next"

const isAuth = false

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: "Trang chủ của Productic, được tạo bởi Lotus Dev",
};

export default function Home() {
//  if(!isAuth) {
//   redirect('/login')
//  }
  return (
    <main className="">
      {/* <ul>
        <li>
          <Link href={'/login'}>Login</Link>
        </li>
        <li>
          <Link href={'/register'}>Register</Link>
        </li>
      </ul> */}
      Xin chào
    </main>
  );
}
