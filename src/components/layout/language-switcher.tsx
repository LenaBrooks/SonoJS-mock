"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { useUiLocale } from "@/components/providers/ui-locale-provider";
import type { UiLocale } from "@/lib/i18n/constants";
import { cn } from "@/lib/utils";

const languages: { code: UiLocale; label: string; flag: string; dir?: "rtl" }[] = [
  { code: "en", label: "English", flag: "us" },
  { code: "fa", label: "فارسی", flag: "ir", dir: "rtl" },
  { code: "ar", label: "العربية", flag: "ar", dir: "rtl" },
  { code: "de", label: "Deutsch", flag: "de" },
  { code: "es", label: "Español", flag: "es" },
  { code: "fr", label: "Français", flag: "fr" },
  { code: "hi", label: "हिन्दी", flag: "hi" },
  { code: "id", label: "Bahasa Indonesia", flag: "id" },
  { code: "it", label: "Italiano", flag: "it" },
  { code: "ja", label: "日本語", flag: "ja" },
  { code: "ko", label: "한국어", flag: "ko" },
  { code: "nl", label: "Nederlands", flag: "nl" },
  { code: "pt", label: "Português", flag: "pt" },
  { code: "ru", label: "Русский", flag: "ru" },
  { code: "tr", label: "Türkçe", flag: "tr" },
  { code: "uk", label: "Українська", flag: "uk" },
  { code: "vi", label: "Tiếng Việt", flag: "vi" },
  { code: "zh", label: "中文", flag: "zh" },
];

export function LanguageSwitcher({
  className,
  drawer = false,
}: {
  className?: string;
  drawer?: boolean;
}) {
  const { locale, setLocale, dict } = useUiLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = languages.find((language) => language.code === locale) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    function closeOnOutside(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", closeOnOutside);
    return () => document.removeEventListener("pointerdown", closeOnOutside);
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={dict.header.apiLangGroup}
        title={dict.header.apiLangGroup}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-md px-2 text-muted-foreground transition-colors hover:bg-[var(--surface-hover)] hover:text-foreground",
          drawer && "w-full justify-between border border-border/70 bg-card/50 px-3",
        )}
      >
        <Languages className="size-4" strokeWidth={1.75} aria-hidden />
        <img src={`/flags/${current.flag}.svg`} alt="" width={20} height={14} className="block h-3.5 w-5 shrink-0 rounded-[2px] object-cover" aria-hidden />
        <span className={cn("hidden text-[12px] sm:inline", drawer && "inline flex-1 text-start")}>{current.label}</span>
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} aria-hidden />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={dict.header.apiLangGroup}
          className={cn(
            "absolute end-0 top-[calc(100%+0.4rem)] z-50 w-56 rounded-lg border border-border bg-background p-1.5 shadow-lg",
            drawer && "start-0 end-0 w-auto",
          )}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              role="option"
              aria-selected={locale === language.code}
              lang={language.code}
              dir="ltr"
              onClick={() => {
                setLocale(language.code);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] transition-colors hover:bg-[var(--surface-hover)]",
                locale === language.code && "bg-[var(--request)]/10 text-[var(--request)]",
                (language.code === "fa" || language.code === "ar") && "font-fa-label",
              )}
            >
              <img src={`/flags/${language.flag}.svg`} alt="" width={20} height={14} className="block h-3.5 w-5 shrink-0 rounded-[2px] object-cover" />
              <span className="min-w-0 flex-1 truncate">{language.label}</span>
              {locale === language.code ? <Check className="size-3.5 shrink-0" aria-hidden /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
