import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="bg-black">
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}
