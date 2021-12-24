import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import InputField from "./InputField";
const SocialSection = () => {
  return (
    <div className="flex flex-col items-start py-6 pb-4 mt-3 firaSans">
      <div className="dark:text-[#FFCE45] text-[#111e27] notoSans text-2xl border-b-4 border-red-500 dark:border-[#6C757D] text-center sm:mx-auto">
        Connect with Me
      </div>
      <div className="flex items-center justify-center w-full">
        <InputField />
      </div>
      <div className="flex flex-col items-start w-full space-y-3 sm:items-center ">
        <div className="flex flex-col px-4 mt-4 space-y-4 text-[#111e27] dark:text-white sm:space-y-0 sm:items-center sm:justify-center sm:space-x-4 sm:w-full sm:flex-row">
          <a
            href="https://github.com/hadi21k"
            className="flex items-center py-2 space-x-1 transition-all duration-300 sm:py-0 dark:hover:text-[#ffce45] text-red-500"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillGithub />
            <h1>Github</h1>
          </a>
          <a
            href="https://instagram.com/hadi21k"
            className="flex items-center py-2 space-x-1 transition-all duration-300 dark:hover:text-[#ffce45] hover:text-red-500"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram />
            <h1>Instagram</h1>
          </a>
          <a
            href="https://twitter.com/hadi21k"
            className="flex items-center py-2 space-x-1 transition-all duration-300 hover:text-red-500 dark:hover:text-[#ffce45] "
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter />
            <h1>Twitter</h1>
          </a>
          <a
            href="https://www.linkedin.com/in/hadi-diab-564b05195/"
            className="flex items-center py-2 space-x-1 transition-all duration-300 hover:text-red-500 dark:hover:text-[#ffce45]"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillLinkedin />
            <h1>Linkedin</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
