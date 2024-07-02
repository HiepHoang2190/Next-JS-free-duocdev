import ButtonLogout from "@/components/button-logout"
import { ModeToggle } from "@/components/mode-toogle"
import Link from "next/link"
import React from "react"
import { cookies } from "next/headers"
import accountApiRequest from "@/app/apiRequests/account"
import { AccountResType } from "@/schemaValidations/account.schema"

export default async function Header({
  user
}:{user: AccountResType['data'] | null}) {


  return (
    <div className="flex space-x-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/products">Sản phẩm</Link>
        </li>
        <li>
              <ButtonLogout />
            </li>
        {user ? (
          <>
            <Link href="/me">
              <div>Xin chào <strong>{user.name}</strong></div>
            </Link>
            <li>
              <ButtonLogout />
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link href="/register">Đăng ký</Link>
            </li>
          </>
        )}
      </ul>
      <ModeToggle />
    </div>
  );
}
