import { AboutPreview } from "@/features/about-preview";
import { Contact } from "@/features/contact";
import { SelectedFreelance } from "@/features/freelance";
import { Hero } from "@/features/hero";
import { FeaturedProjects, OtherProjects } from "@/features/projects";
import { WorkPreview } from "@/features/work-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <OtherProjects />
      <SelectedFreelance />
      <WorkPreview />
      <AboutPreview />
      <Contact />
    </>
  );
}
