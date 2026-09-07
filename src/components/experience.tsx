"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { dict } = useI18n();
  const [open, setOpen] = useState(false);
  const e = dict.experience;

  return (
    <section id="experience" className="section-pad scroll-mt-20 py-20 md:py-28">
      <div className="container-max max-w-3xl">
        <Reveal>
          <p className="eyebrow">{e.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {e.title}
          </h2>

          <article className="mt-10 border border-border bg-card p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold md:text-2xl">
                {e.role}
              </h3>
              <span className="font-mono text-sm text-accent">{e.company}</span>
            </div>
            <p className="mt-4 text-muted leading-relaxed">{e.summary}</p>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="mt-6 text-sm text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              aria-expanded={open}
            >
              {open ? e.collapse : e.expand}
            </button>

            {open && (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {e.topics.map((topic) => (
                  <li
                    key={topic}
                    className="border border-border bg-bg px-3 py-2 text-sm text-muted"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </Reveal>
      </div>
    </section>
  );
}
