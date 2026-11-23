import type { UiLocale } from "./locale/constants";
import { parseUiLocale } from "./locale/constants";
import type { Messages } from "./messages/en";
import { en } from "./messages/en";

const catalogs: Partial<Record<UiLocale, Messages>> = { en };

export function getDictionary(locale: UiLocale): Messages {
  return catalogs[locale] ?? en;
}

export function getDictionaryFromValue(
  value: string | null | undefined,
): Messages {
  return getDictionary(parseUiLocale(value));
}

export type { Messages };
