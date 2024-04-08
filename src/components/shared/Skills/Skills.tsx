import H1 from "@/components/ui/h1";
import Skill from "./Skill";
import { technologies } from "@/lib/skills_set";

const Skills = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 grid h-48 place-items-center border border-secondary p-2 text-center">
            <H1 className="text-3xl">Technical Expertise</H1>
          </div>
          {technologies.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
