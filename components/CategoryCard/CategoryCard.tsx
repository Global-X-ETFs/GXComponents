import React from "react";
import { Button } from "../Button";

export interface CategoryCardProps {
  children: React.ReactNode;
  rhsImage: React.ReactNode;
}

const CategoryCard = React.forwardRef<HTMLDivElement, CategoryCardProps>(
  ({ children, rhsImage, ...props }, ref) => {
    return (
      <div ref={ref} className="grid grid-cols-2 gap-8 py-10 px-8" {...props}>
        <div className="">{children}</div>
        <div className="h-64 w-64">{rhsImage}</div>
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
      className="uppercase font-sans text-ms tracking-widest font-bold"
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
    <h4 className="text-6xl font-bold leading-loose" ref={ref} {...props}>
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
    <p className="text-md font-proxima" ref={ref} {...props}>
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
    <Button className="-mx-2" afterContent="arrow" ref={ref} {...props}>
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
