import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}
