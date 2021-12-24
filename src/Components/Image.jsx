import { motion } from "framer-motion";
import Me from "../Assets/me .webp"
const Image = () => {
  return (
    <div className="w-full img h-[450px] grid place-items-center overflow-y-hidden">
      <motion.img
        initial={{ y: -20, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ y: 20, opacity: 0 }}
        src={Me}
        alt="flame"
        width="150px"
        height="150px"
      />
    </div>
  );
};

export default Image;
