import React from "react";
import cn from "../Utils/cn";

export interface MainNavProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: React.ReactNode[];
  right?: React.ReactNode[];
}

const MainNav = React.forwardRef<HTMLDivElement, MainNavProps>(
  ({ className, left, right, ...props }, ref) => {
    return (
      <div className="preflight">
        <div
          ref={ref}
          className={cn(
            "flex justify-between mx-4 mt-8 pb-7 lg:px-7.5 relative h-[72px]",
            className
          )}
          {...props}
        >
          {left && <div className="group flex items-center">{left}</div>}
          {right && <div className="group flex items-center">{right}</div>}
        </div>
      </div>
    );
  }
);

MainNav.displayName = "MainNav";

export { MainNav };
