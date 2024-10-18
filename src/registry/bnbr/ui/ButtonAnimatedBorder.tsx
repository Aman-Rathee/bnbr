import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const ButtonAnimatedBorder = ({ children, className, ...props }: { children?: ReactNode, className?: string }) => {
    return (
        <button className={cn("animated-border relative z-0 px-6 py-2 text-white bg-gray-900 rounded-full overflow-hidden ", className)} {...props}>
            {children}
        </button>
    );
};

export default ButtonAnimatedBorder;
