// Seperate File so the rest of the InformationCard can be used with SSR

import React from "react";
import cn from "../Utils/cn";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip";
import { TooltipProps, TooltipProvider } from "@radix-ui/react-tooltip";

export interface InformationCardTooltipProps
  extends React.HTMLAttributes<HTMLDivElement>, TooltipProps {
    delayDuration?: number;
  }

const InformationCardToolTip = React.forwardRef<
  HTMLDivElement,
  InformationCardTooltipProps
>(({ className, children, delayDuration = 150, ...props }, ref) => {
  return (
    <TooltipProvider>
    <Tooltip delayDuration={delayDuration} {...props}>
      <TooltipTrigger>
        
          <span
            className={cn(
              "bg-orange rounded-full cursor-pointer text-md text-white ml-2 font-proxima p-1 leading-4 w-4 h-4 inline-flex items-center justify-center",
              className,
            )}
          >
            ?
          </span>
        </TooltipTrigger>
        <TooltipContent
          className={cn(
            "bg-white rounded-md shadow-lg p-4 max-w-80 font-normal text-lg text-darkblue font-proxima leading-5 border-neutral-400 border text-wrap",
            className,
          )}
          ref={ref}
        >
          {children}
        </TooltipContent>
      </Tooltip>
      </TooltipProvider>
  );
});

export { InformationCardToolTip };
