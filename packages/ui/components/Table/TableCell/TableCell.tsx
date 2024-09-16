import type { HTMLAttributes } from "react";
import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../../Utils/cn";


const tableCellVariants = cva("", {
  variants: {
    variant: {
      "row-head": "font-bold",
    },
  },
});

export interface TableCellProps
  extends HTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableCellVariants> {
  loading?: boolean;
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, loading, variant, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        "p-1.5 pt-2 align-middle text-ml text-granite ",
        tableCellVariants({ variant }),
        className,
      )}
      {...props}
    >
      {loading && (
        <div className="h-4 animate-pulse rounded-full bg-gray-500/20" />
      )}
      {!loading && props.children}
    </td>
  ),
);
TableCell.displayName = "TableCell";

export { TableCell };
