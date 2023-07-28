import type { HTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  loading?: boolean;
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, loading, ...props }, ref) => (
    <td
      ref={ref}
      className={cn("p-1.5 pt-2 align-middle text-ml text-granite ", className)}
      {...props}
    >
      {loading && (
        <div className="h-4 animate-pulse rounded-full bg-gray-500/20" />
      )}
      {!loading && props.children}
    </td>
  )
);
TableCell.displayName = "TableCell";

export { TableCell };
