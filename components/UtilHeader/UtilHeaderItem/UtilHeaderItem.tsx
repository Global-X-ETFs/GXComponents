import React from "react";
import cn from "../../Utils/cn";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { UtilHeaderItemIcon } from "./UtilHeaderItemIcon/UtilHeaderItemIcon";

const utilHeaderItemVariants = cva(
  "preflight cursor-pointer items-center font-proxima text-xs leading-3 text-white",
  {
    variants: {
      position: {
        left: "",
        right: `p-[10px] before:p-[10px] before:font-proxima
             before:text-lg before:leading-3 before:text-white before:content-['|'] 
             before:last:hidden md:p-0`,
      },
      isVisibleMobile: {
        true: "",
        false: "hidden md:flex",
      },
    },
    defaultVariants: {
      position: "right",
      isVisibleMobile: false,
    },
  }
);

export interface UtilHeaderItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof utilHeaderItemVariants> {
  icon?: JSX.Element;
}

const UtilHeaderItem = React.forwardRef<HTMLDivElement, UtilHeaderItemProps>(
  ({ className, position, isVisibleMobile, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          ["flex", position == "right" ? "flex-row-reverse" : ""],
          utilHeaderItemVariants({ position, isVisibleMobile }),
          className
        )}
      >
        {icon && <UtilHeaderItemIcon> {icon} </UtilHeaderItemIcon>}
        <div> {children} </div>
      </div>
    );
  }
);

UtilHeaderItem.displayName = "UtilHeaderItem";

export { UtilHeaderItem };
