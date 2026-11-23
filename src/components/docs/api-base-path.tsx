"use client";

import Link from "next/link";
import { CopyButton } from "@/components/docs/copy-button";
import { apiPath } from "@/lib/api/use-api-locale";

export function ApiBasePath({ path }: { path: string }) {
  const href = apiPath(path);

  return (
    <div className="inline-flex max-w-full items-center gap-1 ltr-tech" dir="ltr">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="min-w-0 truncate font-mono text-[12px] text-[var(--request)] underline-offset-2 hover:underline"
      >
        {href}
      </Link>
      <CopyButton value={href} className="size-7" />
    </div>
  );
}
