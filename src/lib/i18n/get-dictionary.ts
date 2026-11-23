import type { UiLocale } from "./constants";
import { parseUiLocale } from "./constants";
import type { Messages } from "./messages/en";
import { en } from "./messages/en";
import { fa } from "./messages/fa";
import { ar } from "./messages/ar";
import { de } from "./messages/de";
import { es } from "./messages/es";
import { fr } from "./messages/fr";
import { hi } from "./messages/hi";
import { id } from "./messages/id";
import { it } from "./messages/it";
import { nl } from "./messages/nl";
import { pt } from "./messages/pt";
import { ru } from "./messages/ru";
import { tr } from "./messages/tr";
import { uk } from "./messages/uk";
import { vi } from "./messages/vi";
import { zh } from "./messages/zh";

const catalogs: Record<UiLocale, Messages> = {
  en, fa, ar, de, es, fr, hi, id, it, nl, pt, ru, tr, uk, vi, zh,
};

export function getDictionary(locale: UiLocale): Messages {
  return catalogs[locale] ?? en;
}

export function getDictionaryFromValue(
  value: string | null | undefined,
): Messages {
  return getDictionary(parseUiLocale(value));
}

export type { Messages };
