import { motion } from "framer-motion";
import React from "react";
const WorkSection = () => {
  return (
    <div className="mainBg min-h-[calc(100vh-65px)] mt-[65px] text-white">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ y: 20, opacity: 0 }}
        className="container mx-auto"
      >
        Still in progress...
      </motion.div>
    </div>
  );
};

export default WorkSection;
