import type { HTMLAttributes } from "react";
import React from "react";
import cn from "../Utils/cn";

const Table = React.forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="preflight w-full overflow-auto font-proxima">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-ml", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

export { Table };
