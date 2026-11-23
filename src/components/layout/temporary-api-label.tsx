"use client";

import { useUiLocale } from "@/components/providers/ui-locale-provider";
import { cn } from "@/lib/utils";

/** "API " / "Temporary API" without ltr reversing the words. */
export function TemporaryApiLabel({ className }: { className?: string }) {
  const { locale, dict } = useUiLocale();

  if (true) {
    return (
      <span className={cn("ltr-tech", className)} dir="ltr">
        {dict.common.temporary}
      </span>
    );
  }

  return (
    <span className={cn("font-mono", className)} dir="ltr">
      <span className="ltr-tech" dir="ltr">
        API
      </span>
      {"\u00A0"}
      
    </span>
  );
}
