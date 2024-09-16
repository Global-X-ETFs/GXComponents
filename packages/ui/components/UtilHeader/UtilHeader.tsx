import React from "react";
import cn from "../Utils/cn";

export interface UtilHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: React.ReactNode[];
  right?: React.ReactNode[];
}

const UtilHeader = React.forwardRef<HTMLDivElement, UtilHeaderProps>(
  ({ className, left, right, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex relative h-9 w-full justify-between bg-darkblue px-4 py-1 lg:px-7.5",
          className,
        )}
        {...props}
      >
        {left && <div className="group flex items-center">{left}</div>}
        {right && <div className="group flex items-center">{right}</div>}
      </div>
    );
  },
);

UtilHeader.displayName = "UtilHeader";

export { UtilHeader };
