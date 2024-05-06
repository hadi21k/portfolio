import AboutContent from "@/components/shared/About/AboutContent";

const About = () => {
  return (
    <main className="pt-[80px] min-h-screen bg-black font-semibold text-white bg-grid-white/5">
      <div className="container max-w-3xl py-6">
        <AboutContent />
      </div>
    </main>
  );
};

export default About;
