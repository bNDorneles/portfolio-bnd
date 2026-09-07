"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";
import type { Project } from "@/content";

function ProjectCard({
  project,
  viewCase,
  collaborativeLabel,
  demoLabel,
  index,
}: {
  project: Project;
  viewCase: string;
  collaborativeLabel: string;
  demoLabel: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="group flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-accent/35 hover:bg-card-hover">
        <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <span className="font-mono text-xs text-muted-dim">
              {String(index + 1).padStart(2, "0")}
            </span>
            <ArrowUpRight
              size={18}
              className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold tracking-tight md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-accent/90">{project.subtitle}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          {project.collaborative && (
            <p className="mt-3 font-mono text-xs text-muted-dim">
              {collaborativeLabel}
            </p>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-5 text-sm text-fg/80 group-hover:text-accent">
            {viewCase} →
          </span>
        </Link>
        {(project.demo || project.github) && (
          <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent transition-colors hover:underline"
              >
                {demoLabel} ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-fg hover:underline"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

export function Projects() {
  const { dict } = useI18n();
  const featured = dict.projects.items.filter((p) => p.featured);

  return (
    <section id="projects" className="section-pad scroll-mt-20 py-20 md:py-28">
      <div className="container-max">
        <Reveal>
          <p className="eyebrow">{dict.projects.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {dict.projects.title}
          </h2>
          <p className="mt-2 font-mono text-sm text-muted-dim">
            {dict.projects.featured}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              viewCase={dict.projects.viewCase}
              collaborativeLabel={dict.projects.collaborative}
            />
          ))}
        </div>

        {dict.projects.otherItems.length > 0 && (
          <Reveal className="mt-16">
            <h3 className="font-display text-xl font-semibold">
              {dict.projects.others}
            </h3>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {dict.projects.otherItems.map((item) => (
                <li key={item.name}>
                  {item.github ? (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col gap-1 py-4 transition-colors hover:text-accent sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <span className="font-medium text-fg">{item.name}</span>
                      <span className="text-sm text-muted">{item.blurb}</span>
                    </a>
                  ) : (
                    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-muted">{item.blurb}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
