"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Github } from "@/components/brand-icons";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/contact";
import { Reveal } from "@/components/reveal";
import { getProject } from "@/content";
import { useI18n } from "@/lib/i18n";

export function ProjectPage({ slug }: { slug: string }) {
  const { dict, locale } = useI18n();
  const project = getProject(locale, slug);

  if (!project) {
    return (
      <>
        <Nav />
        <main className="section-pad flex min-h-[60vh] flex-col items-center justify-center pt-28">
          <p className="text-muted">Project not found.</p>
          <Link href="/#projects" className="mt-4 text-accent">
            ← Back
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const sections = [
    {
      key: "01",
      title: dict.projectPage.sections.context,
      body: project.caseStudy.context,
    },
    {
      key: "02",
      title: dict.projectPage.sections.problem,
      body: project.caseStudy.problem,
    },
    {
      key: "03",
      title: dict.projectPage.sections.solution,
      body: project.caseStudy.solution,
    },
    {
      key: "04",
      title: dict.projectPage.sections.architecture,
      body: project.caseStudy.architecture,
    },
    {
      key: "05",
      title: dict.projectPage.sections.technologies,
      body: project.caseStudy.technologies,
    },
    {
      key: "06",
      title: dict.projectPage.sections.results,
      body: project.caseStudy.results,
    },
    {
      key: "07",
      title: dict.projectPage.sections.learned,
      body: project.caseStudy.learned,
    },
  ] as const;

  return (
    <>
      <Nav />
      <main id="main" className="section-pad pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="container-max max-w-3xl">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} />
              {dict.projectPage.back}
            </Link>

            <p className="mt-10 font-mono text-sm text-accent">
              {project.subtitle}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2.5 text-sm transition-colors hover:border-accent/40"
                >
                  <Github size={16} />
                  {dict.projectPage.github}
                </a>
              )}
              {project.article && (
                <a
                  href={project.article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
                >
                  <ExternalLink size={16} />
                  {project.article.label ?? dict.projectPage.article}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2.5 text-sm transition-colors hover:border-accent/40"
                >
                  <ExternalLink size={16} />
                  {dict.projectPage.demo}
                </a>
              )}
            </div>
          </Reveal>

          <div className="mt-16 space-y-12 border-t border-border pt-12">
            {sections.map((section, i) => (
              <Reveal key={section.key} delay={i * 0.04}>
                <article>
                  <p className="font-mono text-xs text-muted-dim">
                    {section.key} / {section.title}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">
                    {section.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
