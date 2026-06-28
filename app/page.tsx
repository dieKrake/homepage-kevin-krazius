import { Hero } from "@/components/hero";
import EntryTiles from "@/components/entry-tiles";
import Catchphrase from "@/components/catchphrase";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <EntryTiles />
      <Catchphrase />
      <div className="flex flex-col items-center px-4 sm:px-0 mt-20">
        <Services />
        <Testimonials />
      </div>
    </main>
  );
}
