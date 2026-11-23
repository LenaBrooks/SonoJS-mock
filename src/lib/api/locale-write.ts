import {
  resolveApiLocale,
  type LocaleResource,
} from "@/lib/api/locale";

/**
 * API data is English-only; writes are persisted directly to the database.
 */
export async function applyLocalizedPatch<
  TId extends string | number,
  T extends { id: TId },
  TPatch extends object,
>(
  request: Request,
  resource: LocaleResource,
  id: TId,
  body: TPatch,
  update: (id: TId, data: TPatch) => Promise<T | null>,
  getById: (id: TId) => Promise<T | null>,
): Promise<T | null> {
  return update(id, body);
}

export function applyLocalizedCreate(
  request: Request,
  resource: LocaleResource,
  id: string | number,
  body: Record<string, unknown>,
) {
  void request;
  void resource;
  void id;
  void body;
}

export function applyLocalizedDelete(
  resource: LocaleResource,
  id: string | number,
) {
  void resource;
  void id;
}
