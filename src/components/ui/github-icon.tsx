import Image from "next/image";
import React from "react";
import Icon from "@/assets/languages/github.png";

const GithubIcon = () => {
  return <Image src={Icon} alt="Github" width={24} height={24} />;
};

export default GithubIcon;
