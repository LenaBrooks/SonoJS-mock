"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useUiLocale } from "@/components/providers/ui-locale-provider";
import { apiResources } from "@/lib/catalog";
import { RESOURCE_PLACEHOLDERS } from "@/lib/resource-images";
import { cn } from "@/lib/utils";

type MenuPos = {
  top: number;
  left?: number;
  right?: number;
};

const PLACEHOLDER_SRCS = Object.values(RESOURCE_PLACEHOLDERS);

function preloadResourceImages() {
  for (const src of PLACEHOLDER_SRCS) {
    const img = new window.Image();
    img.decoding = "async";
    img.src = src;
  }
}

function positionForButton(button: HTMLButtonElement): MenuPos {
  const rect = button.getBoundingClientRect();
  const width = 200;
  const pad = 8;
  const top = rect.bottom + 4;
  const fitsStart = rect.left + width <= window.innerWidth - pad;
  if (fitsStart) {
    return { top, left: Math.max(pad, rect.left) };
  }
  return {
    top,
    right: Math.max(pad, window.innerWidth - rect.right),
  };
}

export function ResourcesNavMenu({
  className,
  compact = false,
}: {
  className?: string;
  /** Match header mobile nav link sizing. */
  compact?: boolean;
}) {
  const pathname = usePathname();
  const { dict } = useUiLocale();
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<MenuPos | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    preloadResourceImages();
  }, []);

  useEffect(() => {
    if (!open || !buttonRef.current) {
      setMenuPos(null);
      return;
    }
    setMenuPos(positionForButton(buttonRef.current));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onReposition() {
      if (!buttonRef.current) return;
      setMenuPos(positionForButton(buttonRef.current));
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("scroll", onReposition, true);
    };
  }, [open]);

  const resourcesActive = apiResources.some(
    (r) => pathname === r.href || pathname.startsWith(`${r.href}/`),
  );
  const navEmphasis = open || resourcesActive;

  return (
    <div ref={rootRef} className={cn("relative shrink-0", className)}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        onPointerEnter={preloadResourceImages}
        onFocus={preloadResourceImages}
        className={cn(
          "relative inline-flex shrink-0 cursor-pointer items-center whitespace-nowrap transition-colors",
          compact
            ? "gap-1 px-1.5 py-1 text-[12px] md:px-2 md:text-[13px]"
            : "gap-1 px-2.5 py-1 text-sm font-medium",
          navEmphasis
            ? "text-primary underline decoration-primary decoration-2 underline-offset-8"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {dict.home.resourcesTitle}
        <ChevronDown
          className={cn(
            "size-3.5 shrink-0 opacity-70 transition-transform",
            open && "rotate-180",
          )}
          strokeWidth={2}
          aria-hidden
        />
      </button>

      {open && menuPos ? (
        <div
          id={menuId}
          role="menu"
          aria-label={dict.home.resourcesTitle}
          style={{
            top: menuPos.top,
            left: menuPos.left,
            right: menuPos.right,
          }}
          className="fixed z-50 max-h-[min(24rem,70vh)] w-[12.5rem] overflow-y-auto rounded-lg border border-border bg-background py-1 shadow-md"
          dir={"ltr"}
        >
          {apiResources.map((resource) => {
            const title =
              dict.catalog[resource.id]?.title ?? resource.title;
            const imageSrc =
              RESOURCE_PLACEHOLDERS[resource.id] ?? "/placeholders/users.png";
            return (
              <Link
                key={resource.id}
                href={resource.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2 px-2.5 py-1.5 text-start text-[13px] text-muted-foreground transition-colors hover:bg-[var(--surface-hover)] hover:text-foreground",
                )}
              >
                {/* Plain img: same URL as preload cache; avoids /_next/image first-paint delay */}
                <img
                  src={imageSrc}
                  alt=""
                  width={18}
                  height={18}
                  decoding="async"
                  className="size-[18px] shrink-0 object-contain"
                  aria-hidden
                />
                <span className="min-w-0 truncate">{title}</span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
