"use client";

import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export function GithubCta() {
  const { dict } = useI18n();

  return (
    <section className="section-pad py-20 md:py-28">
      <div className="container-max">
        <Reveal>
          <div className="border border-border bg-card p-8 md:flex md:items-end md:justify-between md:p-12">
            <div>
              <p className="eyebrow">{dict.github.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                {dict.github.title}
              </h2>
              <p className="mt-3 max-w-lg text-muted">{dict.github.body}</p>
            </div>
            <a
              href={dict.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-5 py-3 text-sm text-accent transition-colors hover:bg-accent hover:text-bg md:mt-0"
            >
              <Github size={16} />
              {dict.github.cta}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
