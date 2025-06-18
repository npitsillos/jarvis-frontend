"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export interface User {
  id: string
  email: string
  first_name: string
  //   is_active: boolean
  is_verified: boolean
  notifications: { name: string; description: string; viewed: boolean }[]
  //   is_superuser: boolean
}

type RegisterData = {
  first_name: string
  email: string
  password: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (data: RegisterData) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:8080"
  const fetchUser = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/users/me`, {
        credentials: "include", // VERY IMPORTANT to send cookies if the server sets cookies
      })
      if (res.ok) {
        const user = await res.json()
        setUser(user)
      }
    } catch (error) {
      console.error("Error fetching user:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const login = async (email: string, password: string) => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include", // again send cookies
    })

    if (res.ok) {
      fetchUser()
      router.push("/")
    } else {
      const error = await res.json()
      throw new Error(error.message || "Login failed")
    }
  }

  const logout = async () => {
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
    setLoading(true)
    setUser(null)
    setLoading(false)
    router.push("/login")
  }

  const register = async (data: RegisterData) => {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      credentials: "include", // again send cookies
    })

    if (res.ok) {
      await res.json()
      fetchUser()
      router.push("/")
    } else {
      const error = await res.json()
      console.log(error.message)
      throw new Error(error.message || "Registration failed")
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
