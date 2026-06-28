import { Hero } from "@/components/hero";
import About from "@/components/about";
import Contact from "@/components/contact";
import Services from "@/components/services";
import WebsitesTeaser from "@/components/websites-teaser";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="flex flex-col items-center px-4 sm:px-0">
        <Services />
        <WebsitesTeaser />
        <About />
        <Contact />
      </div>
    </main>
  );
}
