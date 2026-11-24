import type { Metadata } from "next";
import type { ApiResource } from "@/lib/catalog";
import type { UiLocale } from "@/lib/locale/constants";

export const SITE_URL = "https://api.sonojs.com";
export const SITE_HOST = "api.sonojs.com";
export const SITE_NAME = "SonoJS API";
export const SITE_TAGLINE = "Free fake REST API";

export const DEFAULT_DESCRIPTION =
  "Free fake REST APIs with live JSON for frontend development. Seeded resources, Temporary API, Fake Data Generator, Image Generator, JSON Workbench, auth, docs, and an in-browser playground.";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** When true, use title as absolute (skip layout template). */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

function ogLocale(_locale: UiLocale): string {
  return "en_US";
}

function alternateOgLocale(_locale: UiLocale): string | undefined {
  return undefined;
}

function blogLanguageAlternates(
  url: string,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: url,
    languages: {
      en: url,
      "x-default": url,
    },
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: CreatePageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = absoluteTitle ? title : `${title} · ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

type CreateBlogListingMetadataInput = CreatePageMetadataInput & {
  locale: UiLocale;
};

/** Metadata for Blog index, category, and pagination pages. */
export function createBlogListingMetadata({
  title,
  description,
  path,
  locale,
  absoluteTitle = false,
  noIndex = false,
}: CreateBlogListingMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = absoluteTitle ? title : `${title} · ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: blogLanguageAlternates(url),
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: ogLocale(locale),
      ...(alternateOgLocale(locale)
        ? { alternateLocale: [alternateOgLocale(locale)!] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

type CreateBlogArticleMetadataInput = CreatePageMetadataInput & {
  locale: UiLocale;
  /** ISO calendar date `YYYY-MM-DD` from frontmatter. */
  publishedTime: string;
};

/** Per-article metadata: OG article type, publishedTime, hreflang, locale. */
export function createBlogArticleMetadata({
  title,
  description,
  path,
  locale,
  publishedTime,
  absoluteTitle = false,
  noIndex = false,
}: CreateBlogArticleMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = absoluteTitle ? title : `${title} · ${SITE_NAME}`;
  const published = /^\d{4}-\d{2}-\d{2}$/.test(publishedTime)
    ? `${publishedTime}T12:00:00.000Z`
    : publishedTime;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: blogLanguageAlternates(url),
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: published,
      locale: ogLocale(locale),
      ...(alternateOgLocale(locale)
        ? { alternateLocale: [alternateOgLocale(locale)!] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function createResourceMetadata(resource: ApiResource): Metadata {
  const title = `${resource.title} API`;
  const description = `${resource.summary} Live JSON at ${resource.basePath} - try it in the SonoJS Mock playground.`;

  return createPageMetadata({
    title,
    description,
    path: resource.href,
  });
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function blogPostingJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  locale: UiLocale;
}): Record<string, unknown> {
  const datePublished = /^\d{4}-\d{2}-\d{2}$/.test(input.datePublished)
    ? `${input.datePublished}T12:00:00.000Z`
    : input.datePublished;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(input.path),
    },
    url: absoluteUrl(input.path),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    isAccessibleForFree: true,
  };
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
  };
}

export function softwareApplicationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: "hello@sonojs.com",
  };
}
