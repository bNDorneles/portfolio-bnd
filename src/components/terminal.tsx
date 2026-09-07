"use client";

import { useRouter } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

type Line = { type: "input" | "output"; text: string };

function fill(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  );
}

export function Terminal() {
  const { dict, locale } = useI18n();
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIndex, setHistIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const projectSlugs = dict.projects.items.map((p) => p.slug);
  const t = dict.terminal;

  useEffect(() => {
    setLines(t.welcome.map((text) => ({ type: "output", text })));
  }, [t.welcome, locale]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [lines]);

  function pushOutput(texts: string[]) {
    setLines((prev) => [
      ...prev,
      ...texts.map((text) => ({ type: "output" as const, text })),
    ]);
  }

  function runCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;

    setLines((prev) => [...prev, { type: "input", text: cmd }]);
    setHistory((prev) => [...prev, cmd]);
    setHistIndex(-1);

    const lower = cmd.toLowerCase();
    const parts = lower.split(/\s+/);
    const base = parts[0];
    const arg = parts[1];

    if (base === "help" || base === "ajuda") {
      pushOutput(t.help);
      return;
    }

    if (base === "clear" || base === "limpar") {
      setLines([]);
      return;
    }

    if (base === "whoami") {
      pushOutput([t.whoami]);
      return;
    }

    if (base === "./about" || base === "about") {
      pushOutput(t.about);
      return;
    }

    if (
      (base === "ls" || base === "listar") &&
      (arg === "projects" || arg === "projetos" || arg === undefined)
    ) {
      pushOutput(projectSlugs.map((s) => `${s}/`));
      return;
    }

    if (base === "cd") {
      const slug = arg?.replace(/\/$/, "");
      if (!slug) {
        pushOutput([t.cdUsage]);
        return;
      }
      if (!projectSlugs.includes(slug)) {
        pushOutput([fill(t.cdMissing, { slug })]);
        return;
      }
      pushOutput([fill(t.cdOpening, { slug })]);
      setTimeout(() => router.push(`/projects/${slug}`), 350);
      return;
    }

    pushOutput([fill(t.notFound, { cmd })]);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    runCommand(input);
    setInput("");
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next = histIndex < 0 ? history.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(next);
      setInput(history[next] ?? "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndex < 0) return;
      const next = histIndex + 1;
      if (next >= history.length) {
        setHistIndex(-1);
        setInput("");
      } else {
        setHistIndex(next);
        setInput(history[next] ?? "");
      }
    }
  }

  return (
    <section id="terminal" className="section-pad scroll-mt-20 py-20 md:py-28">
      <div className="container-max max-w-3xl">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-2 font-mono text-xs text-muted-dim">{t.hint}</p>

          <div
            className="mt-8 overflow-hidden border border-border bg-terminal"
            onClick={() => inputRef.current?.focus()}
            role="region"
            aria-label={t.ariaLabel}
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-[11px] text-muted-dim">
                portfolio — zsh
              </span>
            </div>

            <div className="max-h-[320px] overflow-y-auto p-4 font-mono text-sm">
              {lines.map((line, i) => (
                <div key={`${i}-${line.text}`} className="mb-1 break-words">
                  {line.type === "input" ? (
                    <p>
                      <span className="text-accent">{t.prompt}</span>{" "}
                      <span className="text-fg">{line.text}</span>
                    </p>
                  ) : (
                    <p className="text-muted whitespace-pre-wrap">{line.text}</p>
                  )}
                </div>
              ))}

              <form onSubmit={onSubmit} className="flex items-center gap-2">
                <label htmlFor="terminal-input" className="sr-only">
                  {t.inputLabel}
                </label>
                <span className="shrink-0 text-accent">{t.prompt}</span>
                <input
                  id="terminal-input"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="w-full bg-transparent text-fg outline-none caret-accent"
                  autoComplete="off"
                  spellCheck={false}
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
