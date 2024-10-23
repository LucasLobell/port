import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div className="bg-black">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}
