import { motion } from "framer-motion";
import Flame from "../Assets/3d-flame-278.webp";
const Image = () => {
  return (
    <div className="w-full img h-[340px] grid place-items-center">
      <motion.img
        initial={{ y: -20, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ y: 20, opacity: 0 }}
        src={Flame}
        alt="flame"
        width="420px"
        height="420px"
      />
    </div>
  );
};

export default Image;
