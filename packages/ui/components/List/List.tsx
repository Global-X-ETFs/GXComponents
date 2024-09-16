import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../Utils/cn";

const listItemVariants = cva("", {
  variants: {
    variant: {
      default:
        " flex flex-col gap-2 font-proxima group-hover:duration-600 ease-in-out",
      compact: "flex flex-row items-center text-xl gap-4 md:gap-8 mt-1",
    },
    afterContent: {
      default: "",
      arrow:
        "after:align-middle relative after:items-center after:hover:text-marine  after:translate-y-1/2 after:hover:right-0 after:transition-all after:content-['→'] after:ml-2 after:absolute pr-5 after:right-3 after:bottom-[50%] after:font-sans",
    },
    link: {
      default: "hover:text-orange-hover transition-all duration-300",
      off: "",
    },
  },
  defaultVariants: {
    variant: "default",
    afterContent: "default",
    link: "default",
  },
});

interface ListItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
  VariantProps<typeof listItemVariants> {
  date: string;
  title: string;
  locale?: string;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      date,
      title,
      variant,
      afterContent,
      link,
      locale = "en-US",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <li
        ref={ref}
        className={cn(
          listItemVariants({ variant, className, afterContent }),
          "list-none flex py-4  cursor-pointer group text-marine",
        )}
        {...props}
      >
        <p className="text-granite text-md">
          {date}
        </p>

        <h3 className={cn(listItemVariants({ link }), "text-xl font-sans mr-5")}>
          {title}
        </h3>
      </li>
    );
  },
);

ListItem.displayName = "ListItem";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> { }

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn("list-none divide-y divide-neutral-600", className)}
        {...props}
      />
    );
  },
);

List.displayName = "List";

export { ListItem, List };
