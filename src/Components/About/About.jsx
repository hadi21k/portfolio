import { motion } from "framer-motion";
import React from "react";
import AboutSection from "./AboutSection";
import BioSection from "./BioSection";

const About = () => {
  return (
    <>
      <div className="container mx-auto mt-6">
        <div className="py-2 text-lg font-semibold text-center text-black bg-white rounded sm:text-xl teko">
          Hello, I’m a Front End Developer based in Lebanon.
        </div>
        <div className="py-1 mt-2 text-2xl font-semibold sm:text-3xl teko">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hadi Diab
          </motion.h1>
        </div>
        <AboutSection />
        <BioSection />
      </div>
    </>
  );
};

export default About;
