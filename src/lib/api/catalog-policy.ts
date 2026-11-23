import { jsonError } from "@/lib/api/response";

const CATALOG_PREFIXES = [
  "/api/users",
  "/api/posts",
  "/api/comments",
  "/api/albums",
  "/api/photos",
  "/api/todos",
  "/api/products",
  "/api/notifications",
  "/api/countries",
] as const;

const MUTATION_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

/** When false (default in production), catalog CRUD writes are blocked like JSONPlaceholder. */
export function catalogMutationsEnabled(): boolean {
  const flag = process.env.CATALOG_WRITABLE;
  if (flag === "true") return true;
  if (flag === "false") return false;
  return process.env.NODE_ENV === "development";
}

export function isCatalogDataPath(pathname: string): boolean {
  return CATALOG_PREFIXES.some(
    (base) => pathname === base || pathname.startsWith(`${base}/`),
  );
}

export function isCatalogMutationRequest(
  method: string,
  pathname: string,
): boolean {
  if (!MUTATION_METHODS.has(method.toUpperCase())) return false;
  return isCatalogDataPath(pathname);
}

export const CATALOG_READ_ONLY_MESSAGE =
  "Catalog APIs are read-only on this deployment (JSONPlaceholder-style). Use GET to read shared seed data. For a writable REST API, use Temporary API at /temporary.";

export function catalogReadOnlyResponse() {
  return jsonError("READ_ONLY", CATALOG_READ_ONLY_MESSAGE, 403);
}