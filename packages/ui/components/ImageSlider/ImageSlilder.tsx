import React from "react";
import cn from "../Utils/cn";
import { motion, useMotionValue } from "framer-motion";

export interface ImageSliderProps extends React.HTMLAttributes<HTMLDivElement> { }

const ImageSlider = React.forwardRef<HTMLDivElement, ImageSliderProps>(
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

ImageSlider.displayName = "ImageSlider";

interface ImageSliderTabGroupProps extends React.HTMLAttributes<HTMLDivElement> { }

const ImageSliderTabGroup = React.forwardRef<
  HTMLDivElement,
  ImageSliderTabGroupProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-row justify-center items-center w-full",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
});

ImageSliderTabGroup.displayName = "ImageSliderTabGroup";

interface ImageSliderTabProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number | ((prev: number) => number)) => void;
}

const ImageSliderTab = React.forwardRef<HTMLDivElement, ImageSliderTabProps>(
  (
    { className, children, index, activeIndex, setActiveIndex, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "cursor-pointer flex flex-col justify-center items-center py-4 scroll-smooth text-xl snap-center",
          index == activeIndex
            ? "text-marine"
            : "text-neutral-400",
          className,
        )}
        {...props}
        onClick={() => setActiveIndex(index)}
      >
        <div
          className={cn(
            "flex w-3 h-3 mx-3 rounded-full transition-colors duration-500",
            index == activeIndex ? "bg-black" : "bg-neutral-300",
            className,
          )}
        ></div>
      </div>
    );
  },
);

ImageSliderTab.displayName = "ImageSliderTab";

interface ImageSliderItemGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  activeIndex: number;
  setActiveIndex: (index: number | ((prev: number) => number)) => void;
  totalItems: number;
}

const ImageSliderItemGroup = React.forwardRef<
  HTMLDivElement,
  ImageSliderItemGroupProps
>(({ className, children, activeIndex, setActiveIndex, totalItems, ...props }, ref) => {
  const dragX = useMotionValue(0);

  const onDragEnd = React.useCallback(() => {
    const x = dragX.get();

    if (x > 50) {
      setActiveIndex((prev: number) => Math.max(prev - 1, 0));
    } else if (x < -50) {
      setActiveIndex((prev: number) => Math.min(prev + 1, children.length - 1));
    }
  }, []);

  const handlePrevNext = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    } else {
      if (activeIndex < totalItems - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-row justify-center items-center w-full scroll-smooth snap-center text-marine relatve",
        className,
      )}
      {...props}
    >
      <div onClick={() => handlePrevNext('prev')} className="flex items-center h-[100%] absolute top-0 -left-3 z-50 cursor-pointer bg-gradient-to-r from-white to-transparent"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z" fill="currentColor" /></svg></div>
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
      <div onClick={() => handlePrevNext('next')} className="flex items-center h-[100%] absolute top-0 -right-2 z-50 cursor-pointer bg-gradient-to-r from-transparent to-white"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" /></svg></div>
    </div>
  );
});

ImageSliderItemGroup.displayName = "ImageSliderItemGroup";

const ImageSliderItem = React.forwardRef<
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

ImageSliderItem.displayName = "ImageSliderItem";

export {
  ImageSlider,
  ImageSliderItem,
  ImageSliderTabGroup,
  ImageSliderTab,
  ImageSliderItemGroup,
};
