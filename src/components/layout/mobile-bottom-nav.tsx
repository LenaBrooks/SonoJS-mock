"use client";

import Link from "next/link";
import { ChevronUp, Home, Layers, Sparkles, Terminal, Timer } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useUiLocale } from "@/components/providers/ui-locale-provider";
import { apiResources } from "@/lib/catalog";
import { RESOURCE_PLACEHOLDERS } from "@/lib/resource-images";
import { cn } from "@/lib/utils";

const hiddenPrefixes = [
  "/playground",
  "/generator",
  "/json",
  "/temporary",
  "/image-generator",
  "/auth",
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const { dict } = useUiLocale();
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setResourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!resourcesOpen) return;

    function closeOnOutside(event: PointerEvent) {
      if (!resourcesRef.current?.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutside);
    return () => document.removeEventListener("pointerdown", closeOnOutside);
  }, [resourcesOpen]);

  if (hiddenPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return null;
  }

  const items = [
    { href: "/", label: dict.common.home, icon: Home },
    { href: "/playground", label: dict.common.playground, icon: Terminal },
    { href: "/temporary", label: dict.common.temporary, icon: Timer },
    { href: "/generator", label: dict.common.generator, icon: Sparkles },
  ];

  return (
    <nav
      aria-label={dict.header.primaryNav}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-white/80 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-6px_20px_rgba(0,0,0,0.06)] backdrop-blur-2xl backdrop-saturate-150 supports-backdrop-filter:bg-white/60 dark:border-white/10 dark:bg-background/80 dark:supports-backdrop-filter:bg-background/60 md:hidden"
    >
      <div className="mx-auto flex max-w-md gap-0.5">
        {items.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center gap-1 overflow-hidden rounded-lg px-0.5 py-1.5 text-[10px] text-muted-foreground transition-colors",
                active && "bg-primary/10 text-primary",
              )}
            >
              <Icon className="size-[18px]" strokeWidth={active ? 2 : 1.75} aria-hidden />
              <span className="block max-w-full truncate whitespace-nowrap">{label}</span>
            </Link>
          );
        })}
        <div ref={resourcesRef} className="relative min-w-0 flex-1">
          {resourcesOpen ? (
            <div className="absolute bottom-[calc(100%+0.5rem)] end-0 max-h-[min(22rem,60vh)] w-52 overflow-y-auto rounded-xl border border-border bg-background p-1.5 text-start shadow-lg">
              {apiResources.map((resource) => (
                <Link
                  key={resource.id}
                  href={resource.href}
                  onClick={() => setResourcesOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-muted-foreground hover:bg-[var(--surface-hover)] hover:text-foreground"
                >
                  <img
                    src={RESOURCE_PLACEHOLDERS[resource.id] ?? "/placeholders/users.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 object-contain"
                    aria-hidden
                  />
                  <span className="truncate">
                    {dict.catalog[resource.id]?.title ?? resource.title}
                  </span>
                </Link>
              ))}
            </div>
          ) : null}
          <button
            type="button"
            aria-expanded={resourcesOpen}
            onClick={() => setResourcesOpen((open) => !open)}
            className={cn(
              "flex w-full min-w-0 flex-col items-center gap-1 overflow-hidden rounded-lg px-0.5 py-1.5 text-[10px] text-muted-foreground transition-colors",
              resourcesOpen && "bg-[var(--request)]/10 text-[var(--request)]",
            )}
          >
            <Layers className="size-[18px]" strokeWidth={resourcesOpen ? 2 : 1.75} aria-hidden />
            <span className="block max-w-full truncate whitespace-nowrap">{dict.home.resourcesTitle}</span>
            <ChevronUp className="absolute bottom-1 size-2.5" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </div>
    </nav>
  );
}
