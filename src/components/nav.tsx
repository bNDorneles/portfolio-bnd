"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin } from "@/components/brand-icons";
import { LanguageToggle } from "@/components/language-toggle";
import { useI18n } from "@/lib/i18n";

export function Nav() {
  const { dict } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#projects", label: dict.nav.projects },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-max section-pad flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-fg"
        >
          {dict.nav.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a
              href={dict.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={dict.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <LanguageToggle />
          </div>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="text-fg"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-border bg-bg section-pad pb-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2">
              <a
                href={dict.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                GitHub
              </a>
              <a
                href={dict.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
