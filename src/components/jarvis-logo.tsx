"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useState, useEffect } from "react"

export function JarvisLogoHomeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <Link href="/">
      <Image
        src={theme === "light" ? "/jarvis-light.svg" : "/jarvis-dark.svg"}
        width={40}
        height={40}
        alt="Jarvis logo"
      />
    </Link>
    )
  }

export function JarvisLogoImage({width, height}: {width: number, height: number}) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <Image
      src={theme === "light" ? "/jarvis-light.svg" : "/jarvis-dark.svg"}
      alt="Image"
      width={width}
      height={height}
      className="inset-0 object-cover dark:grayscale"
    />
  )
}