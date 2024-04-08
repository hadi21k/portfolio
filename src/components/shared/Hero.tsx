import H1 from "../ui/h1";
import Link from "next/link";
import { HeroHighlight } from "../ui/hero-highlight";

const Main = () => {
  return (
    <HeroHighlight>
      <section className="relative grid min-h-[calc(100vh-80px)] place-items-center">
        <div className="container z-10 space-y-2 max-sm:px-1">
          <H1>Hi! I&apos;m Hadi Diab</H1>
          <p className="sm:text-lg">
            <span className="inline-block bg-gradient-colors bg-clip-text font-semibold text-transparent">
              Full Stack Developer
            </span>{" "}
            - Building Highly Scalable Applications (JavaScript, TypeScript,
            Nodejs, React)
          </p>
          <Link
            href="/about"
            className="text-sm text-white underline underline-offset-2"
          >
            Learn More
          </Link>
        </div>
      </section>
    </HeroHighlight>
  );
};

export default Main;
