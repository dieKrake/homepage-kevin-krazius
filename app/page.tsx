import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import { HeroHighlightDemo } from "@/components/hero-highlight-demo";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroHighlightDemo />
      <div className="flex flex-col items-center px-4 sm:px-0">
        {/* <About /> */}
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
