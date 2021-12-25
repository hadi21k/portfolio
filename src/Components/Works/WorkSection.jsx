import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const WorkSection = ({ workData, image }) => {
  const [sourceCode, setsourceCode] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setsourceCode(true)}
        onMouseLeave={() => setsourceCode(false)}
      >
        <div className="relative img">
          <img src={image} alt={workData.title} className="rounded-lg" />
          <div
            className={` space-x-2 pattern-red dark:pattern-yellow w-full h-full absolute inset-0 transition-all duration-500 rounded-lg flex items-center notoSans justify-center ${
              sourceCode ? "opacity-1" : "opacity-0 "
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
