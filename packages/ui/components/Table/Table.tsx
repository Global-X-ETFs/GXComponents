import type { HTMLAttributes } from "react";
import React from "react";
import cn from "../Utils/cn";

const Table = React.forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto ">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-lg", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

export { Table };
