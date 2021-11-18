import About from "./About/About";
import Image from "./Image";

const Main = () => {
  return (
    <div className="mainBg min-h-[calc(100vh-65px)] mt-[65px] text-white">
      <Image />
      <About />
    </div>
  );
};

export default Main;
