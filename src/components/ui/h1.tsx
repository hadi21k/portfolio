import { cn } from "@/lib/utils";
import React from "react";

type H1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H1 = ({ children, className, ...props }: H1Props) => {
  return (
    <h1
      {...props}
      className={cn("text-3xl font-bold sm:text-4xl md:text-5xl", className)}
    >
      {children}
    </h1>
  );
};

export default H1;
