"use client";

import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { dict } = useI18n();

  return (
    <section id="about" className="section-pad scroll-mt-20 py-20 md:py-28">
      <div className="container-max grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">{dict.about.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {dict.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            {dict.about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">{dict.timeline.eyebrow}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold">
            {dict.timeline.title}
          </h3>
          <ol className="mt-8 space-y-8 border-l border-border pl-6">
            {dict.timeline.years.map((year) => (
              <li key={year.year} className="relative">
                <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="font-mono text-sm text-accent">{year.year}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {year.events.map((event) => (
                    <li key={event}>{event}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
