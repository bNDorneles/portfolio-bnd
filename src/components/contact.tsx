"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { dict } = useI18n();

  const links = [
    {
      href: dict.links.linkedin,
      label: dict.contact.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      href: dict.links.github,
      label: dict.contact.github,
      icon: Github,
      external: true,
    },
    {
      href: dict.links.email,
      label: dict.contact.email,
      icon: Mail,
      external: false,
    },
  ];

  return (
    <section id="contact" className="section-pad scroll-mt-20 py-20 md:py-28">
      <div className="container-max max-w-2xl">
        <Reveal>
          <p className="eyebrow">{dict.contact.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{dict.contact.body}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {links.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-sm transition-colors hover:border-accent/40 hover:bg-card-hover"
              >
                <Icon size={16} className="text-accent" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { dict } = useI18n();
  return (
    <footer className="section-pad border-t border-border py-8">
      <div className="container-max flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted-dim">
          © {new Date().getFullYear()} Bernardo Gomes Dorneles
        </p>
        <p className="text-sm text-muted">{dict.footer.note}</p>
      </div>
    </footer>
  );
}
