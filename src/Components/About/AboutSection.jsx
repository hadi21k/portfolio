import React from "react";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <div className="mt-3 firaSans">
      <div className="text-[#FFCE45] teko text-3xl border-b-4 border-[#6C757D] inline">
        About
      </div>
      <div className="py-6 text-base leading-6 tracking-wide sm:text-lg">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut"}}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hadi is a student at Lebanese
          University faculty of sceince, studying Computer sceince based in
          Beirut, Lebanon. Started his journey in Web development in November,
          2020 before starting univeristy. He has passion to build websites for
          clients and companies.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutSection;
