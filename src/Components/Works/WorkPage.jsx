import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import WorkSection from "./WorkSection";
import motionImage from "../../Assets/motion.webp";
import dashboardImage from "../../Assets/dashboard.webp";
import teslaCloneImage from "../../Assets/teslaClone.webp";
import cryptoImage from "../../Assets/cryptoMarket.webp";
import pomodoroImage from "../../Assets/pomodoroTimer.webp";
import SocialSection from "../Social/SocialSection";

const WorkPage = () => {
  const worksData = useSelector((state) => state.data.works);
  return (
    <div className="dark:bg-[#111e27] mainLightBg min-h-[calc(100vh-65px)] mt-[65px] text-white">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ y: 20, opacity: 0 }}
        className="container px-8 mx-auto sm:px-0 lg:px-48"
      >
        <div className="flex items-center justify-start py-1">
          <div className="dark:text-[#FFCE45] text-[#111e27] text-xl border-b-4 font-semibold border-red-500 dark:border-[#6C757D]">
            Works
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 website-works-on">
          <WorkSection workData={worksData.motion} image={motionImage} />
          <WorkSection workData={worksData.dashboard} image={dashboardImage} />
          <WorkSection workData={worksData.teslaClone} image={teslaCloneImage} />
          <WorkSection workData={worksData.cryptoMarket} image={cryptoImage} />
          <WorkSection workData={worksData.pomodoroTimer} image={pomodoroImage} />
        </div>
      </motion.div>
    </div>
  );
};

export default WorkPage;
