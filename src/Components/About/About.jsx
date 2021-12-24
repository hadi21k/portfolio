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
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ y: 20, opacity: 0 }}
        className="container px-3 mx-auto mt-6 sm:px-0"
      >
        <div className="py-2 font-medium text-center dark:text-[#111e27] dark:bg-white bg-red-500 text-white rounded sm:text-2xl">
          <p className="text-sm font-bold notoSans">
            Hello, I’m a Front End Developer based in Lebanon.
          </p>
        </div>
        <div className="py-1 mt-2 font-semibold text-left flex space-x-3 items-center text-[#111e27] dark:text-white sm:text-3xl notoSans">
          <h1 className="text-xl notoSans">Hadi Diab</h1>
        </div>
        <AboutSection />
        <TimelineSection />
        <SocialSection />
      </motion.div>
    </>
  );
};

export default About;
