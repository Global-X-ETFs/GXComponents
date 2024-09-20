import type { HTMLAttributes } from "react";
import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../../Utils/cn";

const tableRowVariants = cva("", {
  variants: {
    variant: {
      zebra: "odd:bg-neutral-700",
    },
  },
});

interface TableRowProps
  extends HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, variant, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        `border-b border-b-neutral-600 bg-white `,
        tableRowVariants({ variant }),
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

export { TableRow };
