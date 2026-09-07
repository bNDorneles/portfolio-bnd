"use client";

import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export function HowIWork() {
  const { dict } = useI18n();

  return (
    <section id="process" className="section-pad scroll-mt-20 py-20 md:py-28">
      <div className="container-max">
        <Reveal>
          <p className="eyebrow">{dict.howIWork.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {dict.howIWork.title}
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {dict.howIWork.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <li className="h-full border border-border bg-card p-5">
                <span className="font-mono text-xs text-accent">{step.number}</span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
