// Seperate File so the rest of the InformationCard can be used with SSR

import React from "react";
import cn from "../Utils/cn";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip";
import { TooltipProps, TooltipProvider } from "@radix-ui/react-tooltip";

export interface InformationCardTooltipProps
  extends React.HTMLAttributes<HTMLDivElement>, TooltipProps {
    delayDuration?: number;
  }

const InformationCardToolTipTrigger = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "bg-orange rounded-full cursor-pointer text-md text-white ml-2 font-proxima p-1 leading-4 w-4 h-4 inline-flex items-center justify-center",
        className,
      )}
      {...props}
    >
      ?
    </span>
  );
}

const InformationCardToolTip = React.forwardRef<
  HTMLDivElement,
  InformationCardTooltipProps
>(({ className, children, delayDuration = 150, ...props }, ref) => {
  const innerRef = React.useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useImperativeHandle(ref, () => innerRef.current!, []);

  const [isOpen, setIsOpen] = React.useState(props.defaultOpen ?? false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  const toggleMobileOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  }

  React.useEffect(() => {
    const updateScreen = () => {
      // Update the state to reflect the current screen size
      // 992px is the breakpoint for lg (tailwind config)
      setIsTouchDevice(window?.document.body.offsetWidth < 992);
    }
    updateScreen();
    window.addEventListener('resize', updateScreen)
		return () => window.removeEventListener('resize', updateScreen)
  }, [ref]);

  React.useEffect(() => {
    const handleClickOutside = (event) => {

      if (innerRef?.current && !innerRef?.current.contains(event.target) && isTouchDevice) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isTouchDevice]);

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsOpen(true);
      }, delayDuration);
    }
  }
  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setIsOpen(false);
    }
  }

  return (
    <TooltipProvider>
      <Tooltip 
        delayDuration={!isTouchDevice ? delayDuration : 0}
        open={isOpen}
        {...props} 
      >
        <TooltipTrigger 
          onClick={isTouchDevice ? toggleMobileOpen : undefined} 
          onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined} 
          onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
        >
          <InformationCardToolTipTrigger className={className} />
        </TooltipTrigger>
        <TooltipContent
          className={cn(
            "bg-white rounded-md shadow-lg p-4 max-w-80 font-normal text-lg text-darkblue font-proxima leading-5 border-neutral-400 border text-wrap",
            className,
          )}
          ref={innerRef}
        >
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export { InformationCardToolTip };
