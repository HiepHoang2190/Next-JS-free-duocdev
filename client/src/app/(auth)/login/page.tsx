'use client'
import React, { useState } from "react"
import {websites } from '@/lib/data'

export default function LoginPage() {
  const [email, setEmail] = useState("test@gmail.com")
  console.log('LoginPage')
  return <div>
    Login page
    
    <p>{email}</p>

  <ul>
    {websites.map((item) => {
      return (
        <li key={item.url}>
          {item.name}
        </li>
      )
    }
    )}
  </ul>
  </div>
}
