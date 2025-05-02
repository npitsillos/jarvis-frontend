"use client"

import { LoginForm } from "@/components/login-form"

export function Login() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-xs">
        <LoginForm />
      </div>
    </div>
  )
}
