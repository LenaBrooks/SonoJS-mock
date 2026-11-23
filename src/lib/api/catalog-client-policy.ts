/**
 * Client-side catalog write UI (Preview). Server enforcement is in middleware.
 * Default off so Preview stays JSONPlaceholder-style unless explicitly enabled.
 */
export function catalogPreviewWritable(): boolean {
  return process.env.NEXT_PUBLIC_CATALOG_WRITABLE === "true";
}