import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

const WorkSection = () => {
  const worksData = useSelector((state) => state.data.works);
  return (
    <>
      <div className="grid grid-cols-1 gap-12 py-3 mt-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        {worksData.map(({ title, sourceLink, liveDemo, image, id }) => (
          <div key={id} className="rounded-lg overflow-hidden dark:border-white">
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: id * 0.5,
              }}
              className="cursor-pointer img"
            >
              <img src={image} alt={title} className="rounded-lg text-2xl" />
            </motion.div>
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "linear", delay: id * 0.5 }}
              className="flex flex-col space-y-2 py-2"
            >
              <div className="text-lg text-[#111e27] dark:text-[#ffce45] font-bold">
                <h1>{title}</h1>
              </div>
              <div className="flex space-x-2 itemcenter">
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
