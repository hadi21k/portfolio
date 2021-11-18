import { motion } from "framer-motion";
import React from "react";
import AboutSection from "./AboutSection";
import BioSection from "./BioSection";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container px-3 mx-auto mt-6 sm:px-0"
      >
        <div className="py-2 text-lg font-semibold text-center text-black bg-white rounded sm:text-xl teko">
          Hello, I’m a Front End Developer based in Lebanon.
        </div>
        <div className="py-1 mt-2 text-2xl font-semibold text-center sm:text-left sm:text-3xl teko">
          <motion.h1>Hadi Diab</motion.h1>
        </div>
        <AboutSection />
        <BioSection />
      </motion.div>
    </>
  );
};

export default About;
