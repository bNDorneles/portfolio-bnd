import type { Metadata } from "next";
import { ProjectPage } from "@/components/project-page";
import { getProject, getProjectSlugs, pt } from "@/content";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject("pt", slug) ?? getProject("en", slug);
  if (!project) {
    return { title: "Project — Bernardo Dorneles" };
  }
  return {
    title: `${project.title} — Bernardo Dorneles`,
    description: project.summary,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = pt.projects.items.some((p) => p.slug === slug);
  if (!exists) {
    const { notFound } = await import("next/navigation");
    notFound();
  }
  return <ProjectPage slug={slug} />;
}
