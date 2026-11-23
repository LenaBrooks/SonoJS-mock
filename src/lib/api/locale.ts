import { type ApiLocale } from "@/lib/api/locale-constants";

export { type ApiLocale };

export type LocaleResource =
  | "users"
  | "posts"
  | "comments"
  | "albums"
  | "photos"
  | "todos"
  | "products"
  | "notifications"
  | "countries"
  | "auth";

/** API responses are English-only; ignore any `lang` query param. */
export function resolveApiLocale(_request: Request): ApiLocale {
  return "en";
}

export function localizePayload(
  _resource: LocaleResource,
  data: unknown,
  _locale: ApiLocale,
): unknown {
  return data;
}