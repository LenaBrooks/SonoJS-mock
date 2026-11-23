"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Braces,
  ChevronDown,
  Home,
  ImageIcon,
  Layers,
  Menu,
  Moon,
  Sparkles,
  Sun,
  Terminal,
  Timer,
  X,
} from "lucide-react";
import { ResourcesNavMenu } from "@/components/layout/resources-nav-menu";
import { TemporaryApiLabel } from "@/components/layout/temporary-api-label";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useTheme } from "@/components/providers/theme-provider";
import { useUiLocale } from "@/components/providers/ui-locale-provider";
import { apiResources } from "@/lib/catalog";
import { RESOURCE_PLACEHOLDERS } from "@/lib/resource-images";
import { cn } from "@/lib/utils";

const drawerIconClass = "size-4 shrink-0 text-muted-foreground";

function preloadResourceImages() {
  for (const src of Object.values(RESOURCE_PLACEHOLDERS)) {
    const img = new window.Image();
    img.decoding = "async";
    img.src = src;
  }
}

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const { dict } = useUiLocale();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const panelId = useId();
  const resourcesId = useId();
  const isDark = theme === "dark";

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) setResourcesOpen(false);
  }, [menuOpen]);

  useEffect(() => {
    if (resourcesOpen) preloadResourceImages();
  }, [resourcesOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function navLinkClass(href: string, compact = false) {
    const active = navActive(pathname, href);
    return cn(
      "relative inline-flex shrink-0 cursor-pointer items-center whitespace-nowrap transition-colors",
      compact ? "gap-1 px-1.5 py-1 text-[12px] md:px-2 md:text-[13px]" : "gap-1 px-2.5 py-1 text-sm font-medium",
      active
        ? "text-primary underline decoration-primary decoration-2 underline-offset-8"
        : "text-muted-foreground hover:text-foreground",
    );
  }

  const newBadge = (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary",
      )}
    >
      {dict.common.new}
    </span>
  );

  const temporaryLabel = <TemporaryApiLabel />;

  const drawerItemClass = cn(
    "flex w-full items-center gap-2.5 px-4 py-2.5 text-start text-[13px] text-foreground transition-colors",
    "hover:bg-[var(--surface-hover)]",
  );

  const menuButton = (
    <button
      type="button"
      className="grid size-9 shrink-0 place-items-center rounded-md text-foreground transition-colors hover:bg-[var(--surface-hover)] md:hidden"
      aria-expanded={menuOpen}
      aria-controls={panelId}
      aria-label={menuOpen ? dict.common.close : dict.header.openMenu}
      onClick={() => setMenuOpen((open) => !open)}
    >
      {menuOpen ? (
        <X className="size-5" strokeWidth={1.75} aria-hidden />
      ) : (
        <Menu className="size-5" strokeWidth={1.75} aria-hidden />
      )}
    </button>
  );

  const brand = (
    <Link
      href="/"
      aria-label={dict.common.home}
      title={dict.common.home}
      className="me-1 flex shrink-0 cursor-pointer items-center gap-2 rounded-md outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring md:me-2"
      onClick={closeMenu}
    >
      <img
        src="/images/logos/logo.svg"
        alt=""
        aria-hidden
        width={20}
        height={22}
        className="h-[22px] w-auto shrink-0"
      />
      <span className="text-sm font-bold leading-none tracking-tight text-foreground">
        Mock
        <span className="sr-only"> — SonoJS Mock API</span>
      </span>
    </Link>
  );

  return (
  <div
    data-site-header-stack=""
    className="sticky top-0 z-50 w-full transition-transform duration-300 ease-out"
  >
    <header
      data-site-header=""
      className="w-full overflow-x-clip border-b border-white/20 bg-white/40 backdrop-blur-2xl backdrop-saturate-150 transition-[background-color,backdrop-filter,border-color] duration-300 ease-out supports-backdrop-filter:bg-white/25 dark:border-white/10 dark:bg-background/40 dark:supports-backdrop-filter:bg-background/25"
    >
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-6">
        <div className="relative flex h-(--nav-height) items-center gap-1.5 sm:gap-2.5">
          <div className="md:hidden">{menuButton}</div>
          {brand}

          <nav
            className="header-nav-scroll flex min-w-0 flex-1 items-center gap-0 overflow-x-auto overscroll-x-contain md:hidden"
            aria-label={dict.header.primaryNav}
            dir="ltr"
          >
            <Link href="/playground" className={navLinkClass("/playground", true)}>
              {dict.common.playground}
            </Link>
            <Link href="/temporary" className={navLinkClass("/temporary", true)}>
              {temporaryLabel}
            </Link>
            <Link href="/generator" className={navLinkClass("/generator", true)}>
              {dict.common.generator}
            </Link>
            <Link href="/image-generator" className={navLinkClass("/image-generator", true)}>
              {dict.common.imageGenerator}
            </Link>
            <ResourcesNavMenu compact />
          </nav>

          <nav
            className="hidden min-w-0 flex-1 items-center gap-0.5 overflow-x-auto md:flex"
            aria-label={dict.header.primaryNav}
          >
            <Link href="/playground" className={navLinkClass("/playground")}>
              {dict.common.playground}
            </Link>
            <Link href="/temporary" className={navLinkClass("/temporary")}>
              {temporaryLabel}
            </Link>
            <Link href="/generator" className={navLinkClass("/generator")}>
              {dict.common.generator}
            </Link>
            <Link href="/image-generator" className={navLinkClass("/image-generator")}>
              {dict.common.imageGenerator}
              {newBadge}
            </Link>
            <Link href="/json" className={navLinkClass("/json")}>
              {dict.common.jsonWorkbench}
            </Link>
            <ResourcesNavMenu />
            <Link href="/docs" className={navLinkClass("/docs")}>
              {dict.common.docs}
            </Link>
          </nav>

          <div className="ms-auto flex shrink-0 items-center gap-1.5">
            <Link
              href="https://sonojs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md px-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:inline-flex"
            >
              SonoJS
            </Link>
            <span
              aria-hidden
              className="mx-0.5 hidden h-4 w-px shrink-0 bg-border lg:inline-block"
            />
            <div className="hidden md:flex">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>

      {menuOpen ? (
        <div className="md:hidden" id={panelId}>
          <button
            type="button"
            className="fixed inset-0 z-50 bg-black/45"
            aria-label={dict.common.close}
            onClick={closeMenu}
          />

          <aside
            role="dialog"
            aria-modal="true"
            aria-label={dict.header.menu}
            className={cn(
              "fixed inset-y-0 z-50 flex w-[min(16.5rem,85vw)] flex-col bg-background",
              "animate-in fade-in-0 duration-200",
              "left-0 border-e border-border slide-in-from-left-3",
            )}
          >
            <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4">
              <span
                className={cn(
                  "text-[14px] font-medium text-foreground",
                )}
              >
                {dict.header.menu}
              </span>
              <button
                type="button"
                className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-[var(--surface-hover)]"
                aria-label={dict.common.close}
                onClick={closeMenu}
              >
                <X className="size-4" strokeWidth={1.75} aria-hidden />
              </button>
            </div>

            <nav
              className="flex min-h-0 flex-1 flex-col overflow-y-auto py-1"
              aria-label={dict.header.menu}
            >
              <Link href="/" onClick={closeMenu} className={drawerItemClass}>
                <Home className={drawerIconClass} strokeWidth={1.75} aria-hidden />
                {dict.common.home}
              </Link>
              <Link
                href="/playground"
                onClick={closeMenu}
                className={drawerItemClass}
              >
                <Terminal
                  className={drawerIconClass}
                  strokeWidth={1.75}
                  aria-hidden
                />
                {dict.common.playground}
              </Link>
              <Link
                href="/temporary"
                onClick={closeMenu}
                className={drawerItemClass}
              >
                <Timer
                  className={drawerIconClass}
                  strokeWidth={1.75}
                  aria-hidden
                />
                {temporaryLabel}
              </Link>
              <Link
                href="/generator"
                onClick={closeMenu}
                className={drawerItemClass}
              >
                <Sparkles
                  className={drawerIconClass}
                  strokeWidth={1.75}
                  aria-hidden
                />
                {dict.common.generator}
              </Link>
              <Link
                href="/image-generator"
                onClick={closeMenu}
                className={drawerItemClass}
              >
                <ImageIcon
                  className={drawerIconClass}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="flex-1">{dict.common.imageGenerator}</span>
                {newBadge}
              </Link>
              <Link
                href="/json"
                onClick={closeMenu}
                className={drawerItemClass}
              >
                <Braces
                  className={drawerIconClass}
                  strokeWidth={1.75}
                  aria-hidden
                />
                {dict.common.jsonWorkbench}
              </Link>

              <div>
                <button
                  type="button"
                  aria-expanded={resourcesOpen}
                  aria-controls={resourcesId}
                  onClick={() => setResourcesOpen((o) => !o)}
                  className={drawerItemClass}
                >
                  <Layers
                    className={drawerIconClass}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="flex-1">{dict.home.resourcesTitle}</span>
                  <ChevronDown
                    className={cn(
                      "size-3.5 shrink-0 text-muted-foreground transition-transform",
                      resourcesOpen && "rotate-180",
                    )}
                    strokeWidth={2}
                    aria-hidden
                  />
                </button>
                {resourcesOpen ? (
                  <div
                    id={resourcesId}
                    className="border-y border-border/70 bg-muted/25 py-1"
                  >
                    {apiResources.map((resource) => {
                      const title =
                        dict.catalog[resource.id]?.title ?? resource.title;
                      const imageSrc =
                        RESOURCE_PLACEHOLDERS[resource.id] ??
                        "/placeholders/users.png";
                      return (
                        <Link
                          key={resource.id}
                          href={resource.href}
                          onClick={closeMenu}
                          className={cn(
                            "flex w-full items-center gap-2.5 px-4 py-2 ps-11 text-start text-[12px] text-muted-foreground transition-colors hover:bg-[var(--surface-hover)] hover:text-foreground",
                          )}
                        >
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

              <Link
                href="/docs"
                onClick={closeMenu}
                className={drawerItemClass}
              >
                <BookOpen
                  className={drawerIconClass}
                  strokeWidth={1.75}
                  aria-hidden
                />
                {dict.common.docs}
              </Link>

              <div className="my-1 border-t border-border" />

              <button
                type="button"
                onClick={toggleTheme}
                className={drawerItemClass}
                aria-label={
                  isDark ? dict.header.lightMode : dict.header.darkMode
                }
              >
                {isDark ? (
                  <Moon
                    className={drawerIconClass}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                ) : (
                  <Sun
                    className={drawerIconClass}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                )}
                <span className="flex-1">{dict.header.appearance}</span>
                <span className="text-[12px] text-muted-foreground">
                  {isDark ? dict.header.dark : dict.header.light}
                </span>
              </button>
            </nav>
          </aside>
        </div>
      ) : null}
  </div>
  );
}
