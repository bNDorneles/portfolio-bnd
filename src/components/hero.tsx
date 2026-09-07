"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { dict } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-16">
      <div
        className="pointer-events-none absolute inset-0 grid-noise opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="container-max section-pad relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:py-24">
        <motion.p
          className="mb-4 font-mono text-sm text-muted"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {dict.hero.greeting}
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(2.75rem,12vw,7.5rem)] leading-[0.9] font-bold tracking-tight"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <span className="block">{dict.hero.name}</span>
          <span className="block">
            {dict.hero.lastNameBefore}
            <span className="text-accent">[{dict.hero.lastNameAccent}]</span>
            {dict.hero.lastNameAfter}
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-lg text-muted md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {dict.hero.headline}
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col gap-1 font-mono text-sm text-muted-dim"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <span>{dict.hero.role}</span>
          <span className="text-accent/90">{dict.hero.focus}</span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={dict.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2.5 text-sm text-fg transition-colors hover:border-accent/40 hover:bg-card-hover"
          >
            <Github size={16} />
            {dict.hero.ctaGithub}
          </a>
          <a
            href={dict.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2.5 text-sm text-fg transition-colors hover:border-accent/40 hover:bg-card-hover"
          >
            <Linkedin size={16} />
            {dict.hero.ctaLinkedin}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-2 py-2.5 text-sm text-muted transition-colors hover:text-accent"
          >
            {dict.hero.ctaProjects}
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
