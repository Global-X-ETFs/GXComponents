import type { HTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import cn from "../Utils/cn";

export interface MenuButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ className, isOpen, ...props }, ref) => {
    const top = {
      closed: {
        rotate: 0,
        translateY: 0.5,
      },
      opened: {
        rotate: 45,
        translateY: 2,
      },
    };
    const center = {
      closed: {
        opacity: 1,
      },
      opened: {
        opacity: 0,
      },
    };
    const bottom = {
      closed: {
        rotate: 0,
        translateY: -0.5,
      },
      opened: {
        rotate: -45,
        translateY: -2,
      },
    };

    const lineProps = {
      vectorEffect: "non-scaling-stroke",
      animate: isOpen ? "opened" : "closed",
      stroke: "currentColor",
      strokeWidth: 2,
    };
    return (
      <button className={cn("z-50 ", className)} ref={ref} {...props}>
        <motion.svg
          preserveAspectRatio="none"
          className="w-6 h-6 text-white"
          viewBox="0 0 4 4"
        >
          <motion.line
            x1="0"
            y1="0"
            x2="4"
            y2="0"
            variants={top}
            {...lineProps}
          />
          <motion.line
            x1="0"
            y1="2"
            x2="4"
            y2="2"
            variants={center}
            {...lineProps}
          />
          <motion.line
            x1="0"
            y1="4"
            x2="4"
            y2="4"
            variants={bottom}
            {...lineProps}
          />
        </motion.svg>
      </button>
    );
  },
);

MenuButton.displayName = "MenuButton";

export { MenuButton };
