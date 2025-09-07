"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "light" | "dark"

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme: Theme) => {
        set({ theme })
        if (typeof window !== "undefined") {
          if (theme === "dark") {
            document.documentElement.classList.add("dark")
          } else {
            document.documentElement.classList.remove("dark")
          }
        }
      },
      toggleTheme: () => {
        const { theme, setTheme } = get()
        setTheme(theme === "light" ? "dark" : "light")
      },
    }),
    {
      name: "theme-storage",
    },
  ),
)
