"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export function Bento() {
  const { dict } = useI18n();
  const b = dict.bento;

  return (
    <section className="section-pad py-16 md:py-24" aria-label="Highlights">
      <div className="container-max">
        <Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            <Link
              href="/projects/phishing-llm"
              className="group relative flex min-h-[180px] flex-col justify-between overflow-hidden border border-border bg-card p-6 transition-colors hover:border-accent/30 hover:bg-card-hover sm:col-span-2 lg:row-span-2"
            >
              <span className="eyebrow text-accent">{b.featuredLabel}</span>
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {b.featuredTitle}
                </h2>
                <p className="mt-2 text-sm text-muted">{b.featuredMeta}</p>
              </div>
              <span className="pointer-events-none absolute -right-6 -bottom-8 font-display text-[7rem] font-bold text-fg/[0.03] transition-transform group-hover:scale-105">
                AI
              </span>
            </Link>

            <a
              href={dict.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[140px] flex-col justify-between border border-border bg-card p-5 transition-colors hover:border-accent/30 hover:bg-card-hover"
            >
              <h3 className="font-display text-xl font-semibold">{b.githubTitle}</h3>
              <p className="text-sm text-muted">{b.githubMeta}</p>
            </a>

            <div className="flex min-h-[140px] flex-col justify-end border border-border bg-card p-5">
              <p className="font-mono text-xs text-accent">lang</p>
              <h3 className="font-display text-2xl font-semibold">{b.pythonTitle}</h3>
            </div>

            <div className="flex min-h-[140px] flex-col justify-between border border-border bg-card p-5 sm:col-span-1">
              <h3 className="font-display text-xl font-semibold">
                {b.engineeringTitle}
              </h3>
              <p className="text-sm text-muted">{b.engineeringMeta}</p>
            </div>

            <div className="flex min-h-[140px] flex-col justify-between border border-border bg-bg-elevated p-5 sm:col-span-2 lg:col-span-2">
              <p className="eyebrow">{b.buildingTitle}</p>
              <p className="mt-3 max-w-md text-muted">{b.buildingMeta}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
