import { ModeToggle } from '@/components/mode-toogle'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/login'>
            Đăng nhập
          </Link>
          <Link href='/register'>
            Đăng ký
          </Link>
        </li>
      </ul>
      <ModeToggle/>
    </div>
  )
}
