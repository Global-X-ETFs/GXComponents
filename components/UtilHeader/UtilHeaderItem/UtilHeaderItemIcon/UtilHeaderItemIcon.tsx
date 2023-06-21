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
        "mx-[10px] my-auto inline-flex h-[14px] w-[14px] fill-white align-middle",
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
