import Hero from "@/components/shared/Hero";
import Projects from "@/components/shared/Projects/Projects";
import Contact from "@/components/shared/Contact/Contact";
import Skills from "@/components/shared/Skills/Skills";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Project } from "@/lib/types";

const getProjects = async () => {
  let array: Project[] = [];
  try {
    const projectCollection = collection(db, "projects");
    const projects = await getDocs(projectCollection);

    projects.forEach((doc) => {
      array.push(doc.data() as Project);
    });

    return array;
  } catch (error) {
    console.log(error);
  }
};

const Home = async () => {
  const projects = await getProjects();

  return (
    <main className="bg-black text-white">
      <Hero />
      {projects && <Projects projects={projects} />}
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
