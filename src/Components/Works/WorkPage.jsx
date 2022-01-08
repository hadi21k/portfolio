import { motion } from "framer-motion";
import WorkSection from "./WorkSection";
const WorkPage = () => {
  return (
    <div className="dark:bg-[#111e27] mainLightBg min-h-[calc(100vh-65px)] mt-[65px] text-white">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        exit={{ y: 20, opacity: 0 }}
        className="container sm:px-16 px-3 mx-auto"
      >
        <div className="flex items-center justify-start py-1">
          <div className="dark:text-[#FFCE45] text-[#111e27] text-xl border-b-4 font-semibold border-red-500 dark:border-[#6C757D]">
            Works
          </div>
        </div>
        <WorkSection />
      </motion.div>
    </div>
  );
};

export default WorkPage;


