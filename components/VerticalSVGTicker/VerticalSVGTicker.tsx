import React from "react";
import { AnimatePresence, AnimationDefinition, motion } from "framer-motion";
import cn from "../Utils/cn";

interface VerticalSVGTickerProps extends React.HTMLAttributes<HTMLDivElement> {}

const VerticalSVGTicker = React.forwardRef<
  HTMLDivElement,
  VerticalSVGTickerProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(className, "h-96 overflow-hidden flex flex-col")}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

VerticalSVGTicker.displayName = "VerticalSVGTicker";

interface VerticalSVGTickerItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  activeIndex: number;
  index: number;
}

const VerticalSVGTickerItem = React.forwardRef<
  HTMLDivElement,
  VerticalSVGTickerItemProps
>(({ children, className, activeIndex, index, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.5 }}
          exit={{ scale: 0.5 }}
          animate={{
            translateY: `${activeIndex * 100}%`,
            scale: 1,
          }}
          transition={{ duration: 1 }}
          className={cn("h-64 w-64")}
          layout
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export { VerticalSVGTicker, VerticalSVGTickerItem };
