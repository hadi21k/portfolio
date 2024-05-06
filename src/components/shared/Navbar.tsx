import { MessageSquare } from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/logo.webp";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 z-50 flex h-20 items-center bg-black/40 text-white backdrop-blur-lg backdrop-filter">
      <div className="container flex justify-between max-sm:px-1 lg:max-w-[1200px]">
        <Link href="/">
          <Image src="/logo.webp" alt="Logo" width={40} height={40} />
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
