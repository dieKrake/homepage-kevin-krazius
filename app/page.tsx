import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import IntroSimple from "@/components/intro-simple";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { BackgroundBeams } from "@/components/background-beams";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <BackgroundBeams className="hidden md:block fixed inset-0 h-screen -z-10" />*/}
      <BackgroundBeamsWithCollision className="min-h-screen fixed inset-0 -z-10">
        <></>
      </BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center px-4 sm:px-0">
        <IntroSimple />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
