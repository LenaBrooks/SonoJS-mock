"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const GITHUB_REPO_URL = "https://github.com/MiladJoodi/MockData.ir";
const GITHUB_API_URL = "https://api.github.com/repos/MiladJoodi/MockData.ir";
const STARS_CACHE_KEY = "mockdata-github-stars";
const STARS_CACHE_TTL_MS = 60 * 60 * 1000;

function readCachedStars(): number | null {
  try {
    const raw = sessionStorage.getItem(STARS_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { stars: number; at: number };
    if (
      typeof parsed.stars !== "number" ||
      typeof parsed.at !== "number" ||
      Date.now() - parsed.at > STARS_CACHE_TTL_MS
    ) {
      return null;
    }
    return parsed.stars;
  } catch {
    return null;
  }
}

function writeCachedStars(stars: number) {
  try {
    sessionStorage.setItem(
      STARS_CACHE_KEY,
      JSON.stringify({ stars, at: Date.now() }),
    );
  } catch {
    // ignore quota / private mode
  }
}

function formatStars(n: number) {
  if (n >= 1000) {
    const k = n / 1000;
    return `${k >= 10 ? Math.round(k) : k.toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(n);
}

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

type GithubStarsLinkProps = {
  label: string;
  className?: string;
  /** Compact icon+count for the desktop header utilities. */
  compact?: boolean;
  onNavigate?: () => void;
};

export function GithubStarsLink({
  label,
  className,
  compact = false,
  onNavigate,
}: GithubStarsLinkProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const cached = readCachedStars();
    if (cached != null) {
      setStars(cached);
      return;
    }

    const controller = new AbortController();
    fetch(GITHUB_API_URL, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then(async (res) => {
        if (!res.ok) return;
        const data = (await res.json()) as { stargazers_count?: number };
        if (typeof data.stargazers_count === "number") {
          writeCachedStars(data.stargazers_count);
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        // keep icon-only fallback
      });

    return () => controller.abort();
  }, []);

  const count =
    stars != null ? (
      <span className="text-[11px] tabular-nums leading-none" dir="ltr">
        {formatStars(stars)}
      </span>
    ) : null;

  if (compact) {
    return (
      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={cn(
          "inline-flex h-9 items-center gap-1 rounded-md px-1.5 text-muted-foreground transition-colors",
          "hover:bg-[var(--surface-hover)] hover:text-foreground",
          className,
        )}
        onClick={onNavigate}
      >
        <GithubMark className="size-4" />
        {count}
      </a>
    );
  }

  return (
    <a
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
      onClick={onNavigate}
    >
      <GithubMark className="size-4 shrink-0 text-muted-foreground" />
      <span className="flex-1">{label}</span>
      {count}
    </a>
  );
}
