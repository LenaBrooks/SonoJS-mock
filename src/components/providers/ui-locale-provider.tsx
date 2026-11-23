"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  UI_LOCALE_EVENT,
  type UiLocale,
} from "@/lib/locale/constants";
import {
  applyDocumentLocale,
  readStoredUiLocale,
  writeUiLocale,
} from "@/lib/locale/client-locale";
import { getDictionary, type Messages } from "@/lib/dictionary";

type UiLocaleContextValue = {
  locale: UiLocale;
  dict: Messages;
  setLocale: (locale: UiLocale) => void;
  ready: boolean;
};

const UiLocaleContext = createContext<UiLocaleContextValue | null>(null);

export function UiLocaleProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: UiLocale;
}) {
  const [locale, setLocaleState] = useState<UiLocale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    applyDocumentLocale("en");
    writeUiLocale("en");
    setReady(true);

    function onLocale(e: Event) {
      const next = (e as CustomEvent<UiLocale>).detail;
      if (next === "en") applyDocumentLocale("en");
    }
    window.addEventListener(UI_LOCALE_EVENT, onLocale);
    return () => window.removeEventListener(UI_LOCALE_EVENT, onLocale);
  }, []);

  const setLocale = useCallback((_next: UiLocale) => {
    writeUiLocale("en");
    setLocaleState("en");
    applyDocumentLocale("en");
  }, []);

  const value = useMemo(
    () => ({
      locale,
      dict: getDictionary(locale),
      setLocale,
      ready,
    }),
    [locale, setLocale, ready],
  );

  return (
    <UiLocaleContext.Provider value={value}>{children}</UiLocaleContext.Provider>
  );
}

export function useUiLocale() {
  const ctx = useContext(UiLocaleContext);
  if (!ctx) {
    throw new Error("useUiLocale must be used within UiLocaleProvider");
  }
  return ctx;
}
