import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

const WorkSection = () => {
  const worksData = useSelector((state) => state.data.works);
  const [isOpen, setIsOpen] = useState(false);
  const closeDetails = (i) => {
    worksData.filter(({ id }) => {
      return id === i && setIsOpen(false);
    });
  };
  const openDetails = (i) => {
    worksData.filter(({ id }) => {
      return id === i && setIsOpen(true);
    });
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-12 mt-10 overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
        {worksData.map(
          ({ title, description, sourceLink, liveDemo, image, id }) => (
            <div key={id} className="relative">
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  onClick={() => closeDetails(id)}
                  key={isOpen}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ x: 100, opacity: 0 }}
                  className={`rounded dark:pattern-yellow cursor-pointer pattern-red place-items-center absolute inset-0 w-full h-full ${
                    isOpen ? "grid" : "hidden"
                  } `}
                >
                  <div className="flex items-center space-x-4">
                    <a
                      href={liveDemo}
                      target="_blank"
                      className="dark:bg-[#ffce45] text-white dark:text-[#111e27] font-bold rounded py-1 px-2 sm:p-1 text-base sm:text-sm bg-red-500"
                    >
                      Live Demo
                    </a>
                    <a
                      href={sourceLink}
                      target="_blank"
                      className="dark:bg-[#ffce45] text-white dark:text-[#111e27] font-bold rounded sm:p-1 text-base sm:text-sm py-1 px-2 bg-red-500"
                    >
                      Source Code
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="cursor-pointer img">
                <img
                  onClick={() => openDetails(id)}
                  src={image}
                  alt={title}
                  className="rounded-lg"
                />
              </div>
              <div className="hidden py-1 text-center">
                <div className="text-xl text-[#111e27] dark:text-[#ffce45] font-semibold mt-2">
                  <h1>{title}</h1>
                </div>
                <div className="py-2 text-red-500 dark:text-white description">
                  <p className="text-sm font-bold">{description}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default WorkSection;
