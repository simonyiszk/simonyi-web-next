export type Locale = "hu" | "en"
export type ContentfulLocale = "hu" | "en-US"

export const locales: Locale[] = ["hu", "en"]
export const defaultLocale: Locale = "en"
export const contentfulLocales: ContentfulLocale[] = ["hu", "en-US"]
export const defaultLocaleContentful: ContentfulLocale = "en-US"

export function stringToLocale(string: string): Locale {
  switch (string) {
    case "hu":
      return "hu"
    case "en":
      return "en"
    default:
      return defaultLocale
  }
}

export function localeToContentfulLocale(locale: Locale): ContentfulLocale {
  switch (locale) {
    case "hu":
      return "hu"
    case "en":
      return "en-US"
    default:
      return defaultLocaleContentful
  }
}

export function stringToContentfulLocale(locale: string): ContentfulLocale {
  return localeToContentfulLocale(stringToLocale(locale))
}
