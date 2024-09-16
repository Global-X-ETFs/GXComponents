import React from "react";
import cn from "../Utils/cn";

export interface DisclaimerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Disclaimer = React.forwardRef<HTMLDivElement, DisclaimerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className="w-full bg-darkblue text-neutral-500 pb-16 px-4">
        <div
          className={cn(
            className,
            "max-w-1268 mx-auto font-normal font-proxima gap-4 text-lx flex flex-col",
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  },
);

export { Disclaimer };
