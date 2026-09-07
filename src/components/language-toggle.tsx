"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className="inline-flex items-center rounded-md border border-border bg-card p-0.5 font-mono text-xs"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("pt")}
        className={`rounded px-2 py-1 transition-colors ${
          locale === "pt"
            ? "bg-accent text-bg"
            : "text-muted hover:text-fg"
        }`}
        aria-pressed={locale === "pt"}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded px-2 py-1 transition-colors ${
          locale === "en"
            ? "bg-accent text-bg"
            : "text-muted hover:text-fg"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
