import { MessageSquare } from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/logo.webp";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex h-20 items-center bg-black text-white">
      <div className="container flex justify-between max-sm:px-1 lg:max-w-[1200px]">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={32} height={32} />
        </Link>
        <Link href="#contact" className="flex items-center space-x-2">
          <span>Contact Me</span>
          <MessageSquare />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
