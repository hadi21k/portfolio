import AboutContent from "@/components/shared/About/AboutContent";

const About = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-black font-semibold text-white bg-grid-white/5">
      <div className="container max-w-3xl py-6">
        <AboutContent />
      </div>
    </main>
  );
};

export default About;
