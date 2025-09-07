export const locales = ["en", "zh"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames = {
  en: "English",
  zh: "中文",
}
