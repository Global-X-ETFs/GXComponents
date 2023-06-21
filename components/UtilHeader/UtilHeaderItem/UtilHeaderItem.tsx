import React from "react";
import { cn } from "../../utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import UtilHeaderItemIcon from "./UtilHeaderItemIcon/UtilHeaderItemIcon";

const utilHeaderItemVariants = cva(
  "items-center font-proxima text-xs leading-3 text-white",
  {
    variants: {
      position: {
        left: "ml-[10px]",
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
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof utilHeaderItemVariants> {
  icon?: JSX.Element;
}

const UtilHeaderItem = React.forwardRef<HTMLAnchorElement, UtilHeaderItemProps>(
  ({ className, position, isVisibleMobile, icon, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={cn(
          ["flex", position == "right" ? "flex-row-reverse" : ""],
          utilHeaderItemVariants({ position, isVisibleMobile }),
          className
        )}
      >
        {icon && <UtilHeaderItemIcon src={icon} />}
        <div> {children} </div>
      </a>
    );
  }
);

UtilHeaderItem.displayName = "UtilHeaderItem";

export { UtilHeaderItem };
