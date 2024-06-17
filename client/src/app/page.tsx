import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import suffer from '../../public/images/suffer.png'
import Image from "next/image"
import Card from "@/app/Card"
import Link from "next/link"
import { constants } from "buffer"
import ButtonRedirect from "@/app/components/ButtonRedirect"
import { redirect } from "next/navigation"

const isAuth = false

export default function Home() {
//  if(!isAuth) {
//   redirect('/login')
//  }
  return (
    <main className="">
      <ul>
        <li>
          <Link href={'/login'}>Login</Link>
        </li>
        <li>
          <Link href={'/register'}>Register</Link>
        </li>
      </ul>
      <ButtonRedirect></ButtonRedirect>
    </main>
  );
}
