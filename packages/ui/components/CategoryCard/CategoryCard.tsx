import React from "react";
import { Button } from "../Button";
import cn from "../Utils/cn";

export interface CategoryCardProps {
  children: React.ReactNode;
  className?: string;
}

const CategoryCard = React.forwardRef<HTMLDivElement, CategoryCardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("h-full gap-8 py-8 md:py-10 md:px-8", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CategoryCard.displayName = "CategoryCard";

export interface CategoryCardTitleProps {
  children: React.ReactNode;
}

const CategoryCardTitle = React.forwardRef<
  HTMLDivElement,
  CategoryCardTitleProps
>(({ children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className="font-sans text-md tracking-widest font-bold mb-2.5 md:text-marine text-orange md:after:content-none after:content-['→'] after:ml-2"
      {...props}
    >
      {children}
    </h3>
  );
});

CategoryCardTitle.displayName = "CategoryCardTitle";

export interface CategoryCardSubtitleProps {
  children: React.ReactNode;
}

const CategoryCardSubtitle = React.forwardRef<
  HTMLDivElement,
  CategoryCardSubtitleProps
>(({ children, ...props }, ref) => {
  return (
    <h4
      className="md:text-6xl text-5xl font-bold leading-tight mb-5"
      ref={ref}
      {...props}
    >
      {children}
    </h4>
  );
});

CategoryCardSubtitle.displayName = "CategoryCardSubtitle";

export interface CategoryCardDescriptionProps {
  children: React.ReactNode;
}

const CategoryCardDescription = React.forwardRef<
  HTMLDivElement,
  CategoryCardDescriptionProps
>(({ children, ...props }, ref) => {
  return (
    <p
      className="text-md text-pretty font-proxima mb-2.5 flex-wrap"
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});

CategoryCardDescription.displayName = "CategoryCardDescription";

export interface CategoryCardButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const CategoryCardButton = React.forwardRef<
  HTMLButtonElement,
  CategoryCardButtonProps
>(({ children, ...props }, ref) => {
  return (
    <Button afterContent="arrow" ref={ref} {...props}>
      {children}
    </Button>
  );
});

CategoryCardButton.displayName = "CategoryCardButton";

export {
  CategoryCard,
  CategoryCardTitle,
  CategoryCardSubtitle,
  CategoryCardDescription,
  CategoryCardButton,
};
