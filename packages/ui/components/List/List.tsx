import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../Utils/cn";

const listItemVariants = cva("", {
  variants: {
    variant: {
      default:
        " flex flex-col gap-2 font-proxima group-hover:duration-600 ease-in-out py-4",
      compact: "flex flex-row items-center text-xl gap-4 md:gap-8 mt-1 py-4",
      documents: "flex-row gap-4 items-center border-neutral-400 text-md md:text-lg py-4",
      documentssmall: "flex-row gap-4 items-center border-neutral-400 md:text-md text-sm py-3",
      off: "",
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
  date?: string;
  title: string;
  locale?: string;
  icon?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      date,
      title,
      icon,
      variant,
      afterContent,
      link,
      locale = "en-US",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <li
        ref={ref}
        className={cn(
          listItemVariants({ variant, className, afterContent, link: "off" }),
          "flex  cursor-pointer text-marine"
        )}
        {...props}
      >
        {date && <p className="text-granite text-md">{date}</p>}

        {icon && <div className="w-4">{icon}</div>}
        <h3
          className={cn(listItemVariants({ link, variant: "off",  }), "font-sans mr-5")}
        >
          {title}
        </h3>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

const listVariants = cva("", {
  variants: {
    variant: {
      default: "divide-neutral-600",
      documents: "divide-neutral-200",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {}

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          listVariants({ variant }),
          "divide-y divide-y-black",
          className
        )}
        {...props}
      />
    );
  }
);

List.displayName = "List";

export { ListItem, List };
