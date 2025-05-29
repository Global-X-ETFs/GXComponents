import type { HTMLAttributes } from "react";
import React, { forwardRef } from "react";
import cn from "../Utils/cn";

export interface MenuButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ className, isOpen, ...props }, ref) => {

    return (
      <button className={cn("z-50 ", className)} ref={ref} {...props} aria-label="Open/Close Nav Menu" >
        {/* Line 1 */}
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
            isOpen ? 'mt-1 rotate-45 translate-y-1.5' : '-translate-y-1.5'
          }`}
        />
        {/* Line 2 */}
        <span
          className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Line 3 */}
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
            isOpen ? 'mt-2 -rotate-45 -translate-y-1.5' : 'translate-y-1.5'
          }`}
        />
      </button>
    );
  },
);

MenuButton.displayName = "MenuButton";

export { MenuButton };
