"use client"

import type React from "react"

import { useEffect } from "react"
import { useTheme } from "@/hooks/use-theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return <>{children}</>
}
