import { motion } from "framer-motion";
import SocialSection from "../Social/SocialSection";
import AboutSection from "./AboutSection";
import BioSection from "./BioSection";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ y: 20, opacity: 0 }}
        className="container px-3 mx-auto mt-6 sm:px-0"
      >
        <div className="py-2 text-xl font-medium text-center dark:text-[#111e27] dark:bg-white bg-red-500 text-white rounded sm:text-2xl teko">
          Hello, I’m a Front End Developer based in Lebanon.
        </div>
        <div className="py-1 mt-2 text-2xl font-semibold text-left text-[#111e27] dark:text-white sm:text-3xl teko">
          <h1>Hadi Diab</h1>
        </div>
        <AboutSection />
        <BioSection />
        <SocialSection />
      </motion.div>
    </>
  );
};

export default About;
