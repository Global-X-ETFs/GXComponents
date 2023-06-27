import React from "react";
import type { ReactNode } from "react";
import { cn } from "../../../utils";

export interface UtilHeaderItemIconProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  src?: ReactNode;
}

const UtilHeaderItemIcon = React.forwardRef<
  HTMLSpanElement,
  UtilHeaderItemIconProps
>(({ className, src, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "mx-1.5 my-auto inline-flex w-2.25 fill-white align-middle",
        className
      )}
      {...props}
    >
      {src}
    </span>
  );
});

UtilHeaderItemIcon.displayName = "UtilHeaderItemIcon";

export default UtilHeaderItemIcon;
