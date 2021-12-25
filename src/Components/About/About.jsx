import { motion } from "framer-motion";
import SocialSection from "../Social/SocialSection";
import AboutSection from "./AboutSection";
import TimelineSection from "./TimelineSection";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        exit={{ y: 20, opacity: 0 }}
        className="container px-2 mx-auto mt-6 sm:px-16"
      >
        <div className="py-2 font-medium text-center dark:text-[#111e27] dark:bg-white bg-red-500 text-white rounded">
          <p className="text-sm font-bold sm:text-base">
            Hello, I’m a Front End Developer based in Lebanon.
          </p>
        </div>
        <div className="mt-2 text-left flex space-x-3 items-center text-[#111e27] dark:text-white">
          <h1 className="text-lg font-semibold">Hadi Diab</h1>
        </div>
        <AboutSection />
        <TimelineSection />
        <SocialSection />
      </motion.div>
    </>
  );
};

export default About;
