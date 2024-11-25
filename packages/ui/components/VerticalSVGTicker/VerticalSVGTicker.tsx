import React from "react";

import cn from "../Utils/cn";

export interface VerticalSVGTickerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  iconsURL: string[];
  duration: number;
}

const VerticalSVGTicker = React.forwardRef<
  HTMLDivElement,
  VerticalSVGTickerProps
>(({ children, className, iconsURL, duration, ...props }, ref) => {
  return (
    <div className="overflow-hidden h-80 relative cursor-grab" ref={ref}>
      {/* white gradient top and bottom */}
      <div className="absolute z-10 top-0 w-full h-32 bg-gradient-to-b from-white"></div>
      <div className="absolute z-10 bottom-0 w-full h-32 bg-gradient-to-t from-white"></div>
      {/* Dashed borders */}
      <div className="w-full border-b-2 border-neutral-400 border-dashed h-16 absolute top-0  "></div>
      <div className="w-full border-t-2 border-neutral-400 border-dashed h-16 absolute bottom-0"></div>
      <div
        className={cn(className, "flex flex-col animate-fruit-machine -mt-8 ")}
        {...props}
      >
        <>
          {/* Icons */}
          {iconsURL.map((iconURL, index) => (
            <img
              alt="Global RTC Icon"
              src={iconURL}
              style={{
                animationDelay: `${index % 2 == 0 ? 4000 : 0}ms`,
              }}
              className={`${index % 3 == 1 ? "active" : ""} animate-fruit-machine-scale h-32 mx-auto`}
              key={iconURL + "-1"}
              draggable={false}
            ></img>
          ))}
          {iconsURL.map((iconURL, index) => (
            <img
              alt="Global RTC Icon"
              src={iconURL}
              style={{
                animationDelay: `${index % 2 == 0 ? 4000 : 0}ms`,
              }}
              className={`${index % 3 == 1 ? "active" : ""} animate-fruit-machine-scale h-32 mx-auto`}
              key={iconURL + "-2"}
              draggable={false}
            ></img>
          ))}
        </>
      </div>
    </div>
  );
});

VerticalSVGTicker.displayName = "VerticalSVGTicker";

export { VerticalSVGTicker };
