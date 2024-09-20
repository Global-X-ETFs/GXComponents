import type { ThHTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";
import { VariantProps, cva } from "class-variance-authority";

const tableHeadVariants = cva("", {
  variants: {
    variant: {
      corp: "font-proximatight",
      oversized_column_main:
        "relative align-top md:align-middle pb-12 md:pb-2 z-10",
      oversized_column_siblings:
        "relative align-bottom md:align-middle whitespace-nowrap text-xs sm:text-md font-proximatight",
    },
  },
  defaultVariants: {
    variant: "corp",
  },
});

interface TableHeadProps
  extends ThHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableHeadVariants> {}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, variant, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-10 border-b border-b-neutral-400 bg-white px-1 pb-2 pt-3 text-left align-middle text-md font-bold text-granite",
        tableHeadVariants({ variant }),
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

export { TableHead };
