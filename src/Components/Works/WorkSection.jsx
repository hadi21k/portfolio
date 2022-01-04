import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTextIndentRight, BsTextIndentLeft } from "react-icons/bs";

const WorkSection = ({ workData, image }) => {
  const [sourceCode, setSourceCode] = useState(false);
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative  img">
          <div
            onClick={() => setSourceCode((prev) => !prev)}
            className={`absolute z-10 rounded cursor-pointer h-[20px] w-[20px] grid top-0 place-items-center transition-all duration-500 dark:bg-[#ffce45] bg-red-500 text-white dark:text-[#111e27] ${
              sourceCode ? "right-[calc(100%-20px)]" : "right-0"
            }`}
          >
            {sourceCode ? (
              <BsTextIndentLeft className="w-5 h-5" />
            ) : (
              <BsTextIndentRight className="w-5 h-5" />
            )}
          </div>
          <img src={image} alt={workData.title} className="rounded-lg" />
          <div
            className={` space-x-2 pattern-red dark:pattern-yellow w-full top-0 h-full absolute transition-all duration-500 rounded-lg flex items-center notoSans justify-center ${
              sourceCode ? "right-0" : "-right-full"
            } `}
          >
            <a
              href={workData.sourceLink}
              className="flex items-center space-x-1 text-sm bg-[#f0e7db] transition-all duration-500 rounded-lg px-2 py-1 font-bold text-[#111e27]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillGithub />
              <h1>Source Code</h1>
            </a>
            <a
              href={workData.liveDemo}
              className="flex items-center bg-[#f0e7db] text-sm px-2 py-1 rounded-lg space-x-1 font-bold text-[#111e27]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1>Live Demo</h1>
            </a>
          </div>
        </div>
        <div className="py-1 text-center notoSans">
          <div className="text-xl text-[#111e27] dark:text-[#ffce45] font-semibold mt-2">
            <h1>{workData.title}</h1>
          </div>
          <div className="py-2 text-red-500 dark:text-white description">
            <p className="text-sm font-bold">{workData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSection;
