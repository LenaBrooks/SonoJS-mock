export type UiLocale =
  | "en" | "fa" | "ar" | "de" | "es" | "fr" | "hi" | "id"
  | "it" | "ja" | "ko" | "nl" | "pt" | "ru" | "tr" | "uk" | "vi" | "zh";

export const UI_LOCALE_COOKIE = "mockdata-ui-locale";
export const UI_LOCALE_STORAGE_KEY = "mockdata-ui-locale";
export const UI_LOCALE_EVENT = "mockdata-ui-locale";

export function isUiLocale(value: unknown): value is UiLocale {
  return ["en", "fa", "ar", "de", "es", "fr", "hi", "id", "it", "ja", "ko", "nl", "pt", "ru", "tr", "uk", "vi", "zh"].includes(value as UiLocale);
}

export function parseUiLocale(value: string | null | undefined): UiLocale {
  return isUiLocale(value) ? value : "en";
}
