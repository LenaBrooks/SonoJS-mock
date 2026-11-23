export type UiLocale = "en";

export const UI_LOCALE_COOKIE = "sonojs-mock-ui-locale";
export const UI_LOCALE_STORAGE_KEY = "sonojs-mock-ui-locale";
export const UI_LOCALE_EVENT = "sonojs-mock-ui-locale";

export function isUiLocale(value: unknown): value is UiLocale {
  return value === "en";
}

export function parseUiLocale(value: string | null | undefined): UiLocale {
  return isUiLocale(value) ? value : "en";
}
