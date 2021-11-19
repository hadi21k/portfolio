import { motion } from "framer-motion";
import Flame from "../Assets/3d-flame-278.png";
const Image = () => {
  return (
    <div className="w-full img h-[340px] grid place-items-center">
      <motion.img
        initial={{ y: -20, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        exit={{ y: 20, opacity: 0 }}
        src={Flame}
        alt="flame"
        className="sm:w-[450px] w-[430px] h-[320px] sm:h-[330px]"
      />
    </div>
  );
};

export default Image;
