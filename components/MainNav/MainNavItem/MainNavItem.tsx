import React from "react";
import cn from "../../Utils/cn";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const MainNavItemVariants = cva(
  "preflight cursor-pointer items-center text-xs leading-3 text-white",
  {
    variants: {
      position: {
        left: "",
        right: `p-[10px] before:p-[10px] text-base hover:text-orange transition-colors duration-400`,
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
  },
);

export interface MainNavItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof MainNavItemVariants> {
  icon?: JSX.Element;
}

const MainNavItem = React.forwardRef<HTMLDivElement, MainNavItemProps>(
  ({ className, position, isVisibleMobile, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          ["flex", position == "right" ? "flex-row-reverse" : ""],
          MainNavItemVariants({ position, isVisibleMobile }),
          className,
        )}
      >
        <div> {children} </div>
      </div>
    );
  },
);

MainNavItem.displayName = "MainNavItem";

export { MainNavItem };
