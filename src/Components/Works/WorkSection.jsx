import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const WorkSection = ({ workData, image }) => {
  const [sourceCode, setsourceCode] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setsourceCode(true)}
        onMouseLeave={() => setsourceCode(false)}
        className="relative overflow-hidden"
      >
        <div className="img">
          <img src={image} alt={workData.title} className="rounded-lg" />
        </div>
        <div className="py-1 text-center teko">
          <div className="text-2xl text-[#ffce45] font-bold title">
            <h1>{workData.title}</h1>
          </div>
          <div className="description firaSans">
            <p className="text-sm font-semibold">{workData.description}</p>
          </div>
        </div>
        <div
          className={`source-code space-x-2 left-0 w-full h-full absolute top-0 transition-all duration-500 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg flex items-center justify-center ${
            sourceCode ? "opacity-1" : "opacity-0 "
          } `}
        >
          <a
            href={workData.link}
            className="flex items-center space-x-1 text-xl bg-[#ffce45] rounded-lg px-2 py-1 font-bold text-black teko"
          >
            <AiFillGithub />
            <h1 className="">Source Code</h1>
          </a>
          <a
            href={workData.liveDemo}
            className="flex items-center bg-[#ffce45] px-2 py-1 text-xl rounded-lg space-x-1 font-bold text-black teko"
          >
            <h1 className="">Live Demo</h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default WorkSection;
