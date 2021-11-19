import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const SocialSection = () => {
  return (
    <div className="flex flex-col items-start py-6 pb-4 mt-3 firaSans">
      <div className="text-[#FFCE45] teko text-3xl border-b-4 border-[#6C757D]  text-center sm:mx-auto">
        Connect with Me
      </div>
      <div className="flex flex-col px-4 mt-4 space-y-4 sm:space-y-0 sm:items-center sm:justify-center sm:space-x-4 sm:w-full sm:flex-row">
        <a
          href="https://github.com/hadi21k"
          className="flex items-center py-2 space-x-1 transition-all duration-300 sm:py-0 hover:text-red-500"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillGithub />
          <h1>Github</h1>
        </a>
        <a
          href="https://instagram.com/hadi21k"
          className="flex items-center py-2 space-x-1 transition-all duration-300 hover:text-red-500"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiOutlineInstagram />
          <h1>Instagram</h1>
        </a>
        <a
          href="https://twitter.com/hadi21k"
          className="flex items-center py-2 space-x-1 transition-all duration-300 hover:text-red-500"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiOutlineTwitter />
          <h1>Twitter</h1>
        </a>
        <a
          href="https://www.linkedin.com/in/hadi-diab-564b05195/"
          className="flex items-center py-2 space-x-1 transition-all duration-300 hover:text-red-500"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillLinkedin />
          <h1>Linkedin</h1>
        </a>
      </div>
    </div>
  );
};

export default SocialSection;
