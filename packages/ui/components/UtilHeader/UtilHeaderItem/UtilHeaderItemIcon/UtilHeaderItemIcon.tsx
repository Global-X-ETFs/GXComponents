import React from "react";
import type { ReactNode } from "react";
import cn from "../../../Utils/cn";

export interface UtilHeaderItemIconProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

const UtilHeaderItemIcon = React.forwardRef<
  HTMLSpanElement,
  UtilHeaderItemIconProps
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "mx-1.5 my-auto inline-flex w-3 h-3.5 fill-white align-middle",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
});

UtilHeaderItemIcon.displayName = "UtilHeaderItemIcon";

export { UtilHeaderItemIcon };
