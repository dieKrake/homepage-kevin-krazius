import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import IntroSimple from "@/components/intro-simple";
import { AuroraBackground } from "@/components/aurora-background";
import { HeroHighlight } from "@/components/hero-highlight";
import { HeroHighlightDemo } from "@/components/hero-highlight-demo";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <AuroraBackground className="min-h-screen fixed inset-0 -z-10">
        <></>
      </AuroraBackground> */}

      <HeroHighlightDemo />
      <div className="flex flex-col items-center px-4 sm:px-0">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
