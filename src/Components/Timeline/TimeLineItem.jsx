import { motion } from "framer-motion";

const TimeLineItem = ({ data, index }) => {
  const windowsWidth = window.innerWidth;
  return (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 8 : windowsWidth > 640 ? -8 : 8,
      }}
      whileInView={{ opacity: 1, x: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
        delay: (index + 1) * 0.4,
      }}
      className="relative flex w-full px-5 overflow-x-hidden transition-all duration-500 sm:px-0 sm:justify-center sm:w-1/2 timeline-item"
    >
      <div
        className={`h-full text-sm sm:text-base relative border-2 border-[#111e27] dark:border-[#ffce45] text-[#111e27] font-semibold dark:text-[#ffce45] w-[90%] py-4 px-3 rounded sm:before:block before:hidden before:absolute before:top-1/2 before:bg-[#111e27] dark:before:bg-[#ffce45] ${
          index % 2 === 0 ? "before:left-[-48px]" : "before:right-[-48px]"
        } before:w-12 before:h-[2px]`}
      >
        <span className="absolute top-1/2 sm:hidden w-[20px] h-[2px] bg-[#111e27] dark:bg-white left-[-20px]"></span>
        <h1>{data.year}</h1>
        <h3 className="flex-1">{data.description}</h3>
      </div>
    </motion.div>
  );
};

export default TimeLineItem;
