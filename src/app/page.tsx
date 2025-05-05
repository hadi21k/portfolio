import Hero from "@/components/shared/Hero";
import Projects from "@/components/shared/Projects/Projects";
import Experiences from "@/components/shared/Experience/Experiences";
import Contact from "@/components/shared/Contact/Contact";
import Skills from "@/components/shared/Skills/Skills";

const Home = async () => {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Projects />
      <Experiences />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
