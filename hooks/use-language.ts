"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Locale } from "@/lib/i18n"
import { translations, type TranslationKey } from "@/lib/translations"

interface LanguageStore {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      locale: "en",
      setLocale: (locale: Locale) => set({ locale }),
      t: (key: TranslationKey) => {
        const { locale } = get()
        return translations[locale][key] || translations.en[key] || key
      },
    }),
    {
      name: "language-storage",
    },
  ),
)
