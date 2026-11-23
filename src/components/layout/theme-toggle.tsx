"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { useUiLocale } from "@/components/providers/ui-locale-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { dict } = useUiLocale();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-mode-switch=""
      className={cn(
        "group/toggle relative size-8 shrink-0 cursor-pointer rounded-md border border-border/70 bg-card shadow-none transition-colors hover:bg-canvas",
        "grid place-items-center",
        className,
      )}
      aria-label={isDark ? dict.header.lightMode : dict.header.darkMode}
      title={isDark ? dict.header.light : dict.header.dark}
    >
      <Sun
        className="size-4.5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        aria-hidden
      />
      <Moon
        className="absolute size-4.5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        aria-hidden
      />
    </button>
  );
}