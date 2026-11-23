import {
  parseUiLocale,
  UI_LOCALE_COOKIE,
  UI_LOCALE_EVENT,
  UI_LOCALE_STORAGE_KEY,
  type UiLocale,
} from "./constants";
export function readStoredUiLocale(): UiLocale {
  try {
    return parseUiLocale(localStorage.getItem(UI_LOCALE_STORAGE_KEY));
  } catch {
    return "en";
  }
}

export function writeUiLocale(locale: UiLocale) {
  try {
    localStorage.setItem(UI_LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }

  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${UI_LOCALE_COOKIE}=${locale}; path=/; max-age=${maxAge}; SameSite=Lax`;

  window.dispatchEvent(
    new CustomEvent(UI_LOCALE_EVENT, { detail: locale }),
  );
}

export function applyDocumentLocale(_locale: UiLocale) {
  const root = document.documentElement;
  root.lang = "en";
  root.dir = "ltr";
}
