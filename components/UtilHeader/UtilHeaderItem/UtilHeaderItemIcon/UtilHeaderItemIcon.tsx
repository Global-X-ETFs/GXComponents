import React, { ReactNode } from "react";
import { cn } from "../../../utils";


export interface UtilHeaderItemIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    src?: ReactNode;
}

const UtilHeaderItemIcon = React.forwardRef<HTMLSpanElement, UtilHeaderItemIconProps> (
    ({ className, src, ...props }, ref) => {
        return (
            <span ref={ref} className={cn("fill-white align-middle w-[14px] h-[14px] my-auto inline-flex mx-[10px]", className)}>
                {src}
            </span>
        );
    }
);

export default UtilHeaderItemIcon;