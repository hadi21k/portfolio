import React from "react";
import { Button } from "../../ui/button";
import { Loader2 } from "lucide-react";
import { HoverBorderGradient } from "../../ui/hover-border-gradient";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pending: boolean;
};

const FormButton = ({ children, pending, ...props }: Props) => {
  return (
    <HoverBorderGradient {...props} containerClassName="w-full">
      <div className="flex items-center space-x-2">
        {pending && <Loader2 size={16} className="mr-1 animate-spin" />}
        {children}
      </div>
    </HoverBorderGradient>
  );
};

export default FormButton;
