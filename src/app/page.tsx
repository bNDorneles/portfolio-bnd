import { About } from "@/components/about";
import { Bento } from "@/components/bento";
import { Contact, Footer } from "@/components/contact";
import { Experience } from "@/components/experience";
import { GithubCta } from "@/components/github-cta";
import { Hero } from "@/components/hero";
import { HowIWork } from "@/components/how-i-work";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { ScrollToTop } from "@/components/scroll-to-top";
import { TechStack } from "@/components/tech-stack";
import { Terminal } from "@/components/terminal";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main id="main">
        <Hero />
        <Bento />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <HowIWork />
        <Terminal />
        <GithubCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
