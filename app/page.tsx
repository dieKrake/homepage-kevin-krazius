import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import IntroSimple from "@/components/intro-simple";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <IntroPicture /> */}
      <div className="flex flex-col items-center px-4 sm:px-0">
        {/* <Intro /> */}
        <BackgroundBeamsWithCollision>
          <IntroSimple />
        </BackgroundBeamsWithCollision>
        {/* <SectionDivider /> */}
        <About />
        <Projects />
        {/* <Skills /> */}
        <Contact />
      </div>
    </main>
  );
}
