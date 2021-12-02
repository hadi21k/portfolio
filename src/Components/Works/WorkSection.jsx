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
            className={` space-x-2 patter-red dark:pattern-yellow w-full h-full absolute inset-0 transition-all duration-500 rounded-lg flex items-center justify-center ${
              sourceCode ? "opacity-1" : "opacity-0 "
            } `}
          >
            <a
              href={workData.sourceLink}
              className="flex items-center space-x-1 text-xl bg-[#f0e7db] transition-all duration-500 rounded-lg px-2 py-1 font-semibold text-[#111e27] teko"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillGithub />
              <h1>Source Code</h1>
            </a>
            <a
              href={workData.liveDemo}
              className="flex items-center bg-[#f0e7db] px-2 py-1 text-xl rounded-lg space-x-1 font-semibold text-[#111e27] teko"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1>Live Demo</h1>
            </a>
          </div>
        </div>
        <div className="py-1 text-center teko">
          <div className="text-2xl text-[#111e27] dark:text-[#ffce45] font-bold title">
            <h1>{workData.title}</h1>
          </div>
          <div className="py-2 text-red-500 dark:text-white description firaSans">
            <p className="text-sm font-semibold">{workData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSection;
