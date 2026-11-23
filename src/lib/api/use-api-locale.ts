/** English-only API: paths are used as-is (no `lang` query param). */
export function apiPath(path: string): string {
  return path;
}