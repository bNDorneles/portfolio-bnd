"use client";

import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export function TechStack() {
  const { dict } = useI18n();

  return (
    <section id="stack" className="section-pad scroll-mt-20 py-20 md:py-28">
      <div className="container-max">
        <Reveal>
          <p className="eyebrow">{dict.stack.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {dict.stack.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {dict.stack.groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.04}>
              <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border bg-card px-3 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
