import React from "react";
import cn from "../Utils/cn";
import { motion, useMotionValue } from "framer-motion";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden flex flex-col ", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Carousel.displayName = "Carousel";

interface CarouselTabGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselTabGroup = React.forwardRef<
  HTMLDivElement,
  CarouselTabGroupProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-row justify-center md:justify-evenly items-center w-full",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
});

CarouselTabGroup.displayName = "CarouselTabGroup";

interface CarouselTabProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number | ((prev: number) => number)) => void;
}

const CarouselTab = React.forwardRef<HTMLDivElement, CarouselTabProps>(
  (
    { className, children, index, activeIndex, setActiveIndex, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "cursor-pointer flex flex-col justify-center items-center py-4 scroll-smooth text-xl snap-center md:border-b-4",
          index == activeIndex
            ? "text-marine border-orange"
            : "text-neutral-400 border-transparent",
          className,
        )}
        {...props}
        onClick={() => setActiveIndex(index)}
      >
        <div className={cn("hidden md:flex", className)}> {children} </div>
        <div
          className={cn(
            "flex md:hidden w-3 h-3 mx-3 rounded-full transition-colors duration-500",
            index == activeIndex ? "bg-black" : "bg-neutral-300",
            className,
          )}
        ></div>
      </div>
    );
  },
);

CarouselTab.displayName = "CarouselTab";

interface CarouselItemGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  activeIndex: number;
  setActiveIndex: (index: number | ((prev: number) => number)) => void;
}

const CarouselItemGroup = React.forwardRef<
  HTMLDivElement,
  CarouselItemGroupProps
>(({ className, children, activeIndex, setActiveIndex, ...props }, ref) => {
  const dragX = useMotionValue(0);

  const onDragEnd = React.useCallback(() => {
    const x = dragX.get();

    if (x > 50) {
      setActiveIndex((prev: number) => Math.max(prev - 1, 0));
    } else if (x < -50) {
      setActiveIndex((prev: number) => Math.min(prev + 1, children.length - 1));
    }
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-row justify-center items-center w-full scroll-smooth snap-center text-marine",
        className,
      )}
      {...props}
    >
      <motion.div
        drag="x"
        initial={false}
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: `-${activeIndex * 100}%` }}
        onDragEnd={onDragEnd}
        dragMomentum={false}
        transition={{ ease: "easeIn", duration: 0.3 }}
        style={{ x: dragX }}
        className="flex flex-row cursor-grab active:cursor-grabbing z-10"
      >
        {children}
      </motion.div>
    </div>
  );
});

CarouselItemGroup.displayName = "CarouselItemGroup";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex-shrink-0 flex flex-col md:justify-center items-center w-full scroll-smooth snap-center",
        className,
      )}
      {...props}
    />
  );
});

CarouselItem.displayName = "CarouselItem";

export {
  Carousel,
  CarouselItem,
  CarouselTabGroup,
  CarouselTab,
  CarouselItemGroup,
};
