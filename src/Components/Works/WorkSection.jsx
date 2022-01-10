import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

const WorkSection = () => {
  const worksData = useSelector((state) => state.data.works);
  return (
    <>
      <div className="grid py-3 grid-cols-1 gap-12 mt-6 overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
        {worksData.map(({ title, sourceLink, liveDemo, image, id }) => (
          <div key={id}>
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: id * 0.3,
              }}
              className="cursor-pointer img"
            >
              <img src={image} alt={title} className="rounded-lg" />
            </motion.div>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: id * 0.3 }}
              className="py-1 flex flex-col space-y-2"
            >
              <div className="text-lg text-[#111e27] dark:text-[#ffce45] font-bold mt-2">
                <h1>{title}</h1>
              </div>
              <div className="flex itemcenter space-x-2">
                <a
                  href={liveDemo}
                  className="p-1 text-xs rounded dark:bg-[#ffce45] bg-red-500 dark:text-[#111e27] text-white font-bold"
                >
                  Live Demo
                </a>
                <a
                  href={sourceLink}
                  className="p-1 text-xs rounded dark:bg-[#ffce45] bg-red-500 dark:text-[#111e27] text-white font-bold"
                >
                  Source Link
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkSection;
