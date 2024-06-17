'use client'
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("test@gmail.com")
  console.log('LoginPage')
  return <div>
    Login page
    {email}
  </div>
}
