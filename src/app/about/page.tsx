import AboutContent from "@/components/shared/About/AboutContent";
import React from "react";

const About = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-black font-semibold text-white bg-grid-white/5">
      <div className="container">
        <AboutContent />
      </div>
    </main>
  );
};

export default About;
