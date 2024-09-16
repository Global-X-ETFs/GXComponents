import type { HTMLAttributes } from "react";
import React, { forwardRef } from "react";
import cn from "../Utils/cn";
import { MenuButton } from "../MenuButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";
import { motion, AnimatePresence } from "framer-motion";

const MenuContext = React.createContext({
  isMenuOpen: false,
  toggleMenu: () => { },
});

export const useMenu = () => React.useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export interface MainNavProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  iconURL?: string;
  searchButton?: React.ReactNode;
}

const MainNav = forwardRef<HTMLDivElement, MainNavProps>(
  ({ className, icon, iconURL, searchButton, children, ...props }, ref) => {
    const { isMenuOpen, toggleMenu } = useMenu();

    return (
      <div
        ref={ref}
        className={cn(
          "lg:px-7.5 h-18 px-4 mt-6 lg:mt-8 flex w-full pb-7",
          className,
        )}
        {...props}
      >
        {icon && (
          <a className="w-full max-w-60 lg:max-w-72 h-6" href={iconURL}>
            {icon}
          </a>
        )}

        {/* Desktop */}
        <div className="ml-auto mr-0 group items-center text-nowrap hidden lg:flex">
          {children}
        </div>

        {/* Mobile */}
        <div className="flex w-full justify-end gap-x-5 lg:hidden">
          <MenuButton
            isOpen={isMenuOpen}
            onClick={toggleMenu}
            className={cn(
              "right-0 ml-auto lg:hidden",
              isMenuOpen && "fixed right-4",
            )}
          />
          {searchButton}
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.dialog
              initial={{ y: "-100svh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100svh" }}
              transition={{ duration: 0.2 }}
              open={isMenuOpen}
              className="lg:hidden fixed  z-40 top-0 bottom-0 left-0 right-0  bg-marine w-screen min-h-screen"
            >
              <ul className="space-y-10 pt-20 text-2xl">{children}</ul>
            </motion.dialog>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

MainNav.displayName = "MainNav";

export interface MainNavItemProps extends HTMLAttributes<HTMLLIElement> {
  icon?: JSX.Element;
  dontCloseMenu?: boolean;
}

const MainNavItem = forwardRef<HTMLLIElement, MainNavItemProps>(
  ({ className, icon, children, dontCloseMenu, ...props }, ref) => {
    const { toggleMenu } = useMenu();

    return (
      <li
        ref={ref}
        {...props}
        onClick={dontCloseMenu ? null : toggleMenu}
        className={cn(
          "group/icon flex cursor-pointer font-bold lg:font-normal font-sans items-center pl-7 leading-3 text-white lg:hover:text-orange whitespace-nowrap duration-400 lg:text-ml transition-colors flex-row-reverse justify-end",
          className,
        )}
      >
        {icon && (
          <span
            ref={ref}
            className={cn(
              "group-hover/icon:fill-orange mx-1.5 my-auto inline-flex h-3.5 w-3 flex-row-reverse fill-white align-middle transition-colors duration-75",
            )}
          >
            {icon}
          </span>
        )}
        {children}
      </li>
    );
  },
);

MainNavItem.displayName = "MainNavItem";

export interface ExpandableNavProps extends HTMLAttributes<HTMLButtonElement> {
  refName: string;
}

const ExpandableNav = forwardRef<HTMLDivElement, ExpandableNavProps>(
  ({ children, className, refName }, ref) => {
    return (
      <Accordion
        collapsible
        ref={ref}
        type="single"
        className={cn(
          "group/icon flex cursor-pointer font-bold lg:font-normal font-sans items-center pl-7 leading-3 text-white lg:hover:text-orange duration-400 lg:text-base transition-colors flex-row-reverse justify-end w-full",
          className,
        )}
      >
        <AccordionItem value={refName}>
          <AccordionTrigger chevronStyle="mobileNav" triggerStyle="mobileNav">
            {refName}
          </AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
);

ExpandableNav.displayName = "ExpandableNav";

export interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
  dontCloseMenu?: boolean;
}

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ children, className, dontCloseMenu, ...props }, ref) => {
    const { toggleMenu } = useMenu();

    return (
      <div
        className={cn(
          "flex pt-4 flex-col h-full items-start gap-4 font-normal text-ml",
          className,
        )}
        onClick={dontCloseMenu ? null : toggleMenu}
        {...props}
      >
        {children}
      </div>
    );
  },
);

NavItem.displayName = "NavItem";

export { MainNav, MainNavItem, NavItem, ExpandableNav };
