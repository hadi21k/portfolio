import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import WorkSection from "./WorkSection";
import motionImage from "../../Assets/motion.png";
import dashboardImage from "../../Assets/dashboard.png";
import teslaCloneImage from "../../Assets/teslaClone.png";
import cryptoImage from "../../Assets/cryptoMarket.png";
import pomodoroImage from "../../Assets/pomodoroTimer.png";
import SocialSection from "../Social/SocialSection";

const WorkPage = () => {
  const worksData = useSelector((state) => state.data.works);
  return (
    <div className="mainBg min-h-[calc(100vh-65px)] mt-[65px] text-white">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ y: 20, opacity: 0 }}
        className="container px-8 mx-auto sm:px-0 lg:px-48"
      >
        <div className="flex items-center justify-center">
          <div className="dark:text-[#FFCE45] text-[#111e27] mx-auto teko text-3xl border-b-4 border-red-500 dark:border-[#6C757D] inline">
            Works
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 xl:grid-cols-2 website-works-on">
          <WorkSection workData={worksData.motion} image={motionImage} />
          <WorkSection workData={worksData.dashboard} image={dashboardImage} />
          <WorkSection
            workData={worksData.teslaClone}
            image={teslaCloneImage}
          />
          <WorkSection workData={worksData.cryptoMarket} image={cryptoImage} />
          <WorkSection
            workData={worksData.pomodoroTimer}
            image={pomodoroImage}
          />
        </div>
        <SocialSection />
      </motion.div>
    </div>
  );
};

export default WorkPage;
