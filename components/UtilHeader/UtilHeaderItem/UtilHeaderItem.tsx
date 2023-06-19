import React, { ReactNode } from "react";
import { cn } from "../../utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import UtilHeaderItemIcon, {
  UtilHeaderItemIconProps,
} from "./UtilHeaderItemIcon/UtilHeaderItemIcon";

const utilHeaderItemVariants = cva(
  "text-xs leading-3 text-white items-center font-proxima",
  {
    variants: {
      position: {
        left: "ml-[10px]",
        right: `before:content-['|'] before:text-white before:text-lg
             before:font-proxima before:leading-3 before:p-[10px] before:last:hidden 
             md:p-0 p-[10px]`,
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
        {/* <div className={cn(utilHeaderItemVariants({position}), className)}>{children}</div> */}
        <div> {children} </div>
      </a>
    );
  }
);

export default UtilHeaderItem;
