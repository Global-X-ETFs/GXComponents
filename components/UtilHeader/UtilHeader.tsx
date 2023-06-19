import React from "react";
import { cn } from "../utils";


export interface UtilHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    left?: React.ReactNode[];
    right?: React.ReactNode[];
}

const UtilHeader = React.forwardRef<HTMLDivElement, UtilHeaderProps>(
    ({ className, left, right, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("flex bg-gxdarkgray justify-between w-full lg:px-[30px] py-[5px]", className)}>
                {left && <div className="flex items-center group">{left}</div>}
                {right && <div className="flex items-center group">{right}</div>}
            </div>
        );
    }
);

export default UtilHeader;