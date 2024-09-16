import React from "react";
import cn from "../Utils/cn";

interface ExpandButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  expanded: boolean;
}

const ExpandButton = React.forwardRef<HTMLButtonElement, ExpandButtonProps>(
  ({ expanded, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center w-full py-1.5 relative bg-neutral-600 text-granite",
          "transition-transform duration-200 hover:text-orange-hover",
          "after:content-['→'] after:ml-2 after:rotate-90 font-sans ",
          expanded ? "transform after:-rotate-90" : "",
          className,
        )}
        {...props}
      >
        {children}
        <span className="sr-only">Expand</span>
      </button>
    );
  },
);

ExpandButton.displayName = "ExpandButton";

export { ExpandButton };
