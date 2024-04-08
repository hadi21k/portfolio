import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import Projects from "@/components/shared/Projects/Projects";
import Contact from "@/components/shared/Contact/Contact";
import Skills from "@/components/shared/Skills/Skills";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
