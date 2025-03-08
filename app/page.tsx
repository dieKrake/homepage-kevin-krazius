import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
// import IntroPicture from "@/components/intro-picture";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <IntroPicture /> */}
      <div className="flex flex-col items-center px-4 sm:px-0">
        <Intro />
        {/* <SectionDivider /> */}
        <About />
        <Projects />
        {/* <Skills /> */}
        <Contact />
      </div>
    </main>
  );
}
