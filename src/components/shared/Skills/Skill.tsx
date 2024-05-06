import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SkillsProps = {
  name: string;
  imageUrl: StaticImageData;
  alt: string;
};

const Skill = ({ name, imageUrl, alt }: SkillsProps) => {
  return (
    <div className="flex h-48 items-center justify-center border border-secondary">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image src={imageUrl} alt={alt} width={72} height={72} />
          </TooltipTrigger>
          <TooltipContent className="font-semibold">{name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Skill;
