import * as React from "react";
import { CaretSortIcon, CheckIcon, CaretDownIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../Utils/cn";

const selectVariants = cva("", {
  variants: {
    variant: {
      corp: "",
      fund: "flex",
    },
  },
  defaultVariants: {
    variant: "corp",
  },
});

interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
  VariantProps<typeof selectVariants> {
  className?: string;
}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  SelectProps
>(({ className, children, variant, ...props }, ref) => (
  <div ref={ref} className={cn("", selectVariants({ variant }), className)}>
    <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
  </div>
));

Select.displayName = "Select";

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const selectLabelVariants = cva("", {
  variants: {
    variant: {
      corp: "text-granite text-md leading-5",
      fund: "flex font-proxima text-sm lg:text-[13px] font-normal text-neutral-200 items-center",
      rounded: "text-marine text-lg",
    },
  },
  defaultVariants: {
    variant: "corp",
  },
});

interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<"label">,
  VariantProps<typeof selectLabelVariants> { }

const SelectLabel = React.forwardRef<HTMLLabelElement, SelectLabelProps>(
  ({ children, variant, className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-granite text-md leading-5",
        selectLabelVariants({ variant }),
        className,
      )}
      {...props}
    >
      {children}
    </label>
  ),
);

SelectLabel.displayName = "SelectLabel";

const selectTriggerVariants = cva("", {
  variants: {
    variant: {
      corp: "flex h-9 w-full items-center  text-granite justify-between border-0 bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-600 px-3 py-2 placeholder:text-neutral-100 disabled:cursor-not-allowed disabled:opacity-50",
      fund: "flex font-sans text-[13px] font-bold text-granite border pl-2 mx-2 border-neutral-400 rounded-sm items-center",
      videos: "flex justify-between font-sans text-lg font-bold text-white border py-2 px-4 border-white rounded-sm items-center bg-marine bg-opacity-20",
      rounded: `flex items-center justify-center cursor-pointer appearance-none w-full 
      bg-white border border-marine text-marine hover:bg-neutral-700 px-5 py-2 rounded-md 
      focus:outline-none focus:shadow-outline`,
    },
  },
  defaultVariants: {
    variant: "corp",
  },
});

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
  VariantProps<typeof selectTriggerVariants> {
  className?: string;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, variant, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(``, selectTriggerVariants({ variant }), className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      {variant === "rounded" ? (
        <CaretDownIcon className="text-marine w-4 h-4 ml-1.5" />
      ) : variant === "videos" ? (
        <CaretDownIcon className="text-white w-5 h-5 ml-1.5" />
      ) : (
        <CaretSortIcon className="h-4 w-4 opacity-50 text-orange" />
      )}
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const selectContentVariants = cva("", {
  variants: {
    variant: {
      corp: "border-0 bg-neutral-700",
      fund: "border bg-neutral-700 shadow-md",
      rounded: "bg-white border border-gray-300 shadow-md rounded-md",
    },
  },
  defaultVariants: {
    variant: "corp",
  },
});

interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
  VariantProps<typeof selectContentVariants> {
  className?: string;
  position?: "popper" | "item-aligned";
}

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, children, variant, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        `relative z-50 min-w-[8rem] overflow-hidden  
         data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0
         data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
         data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
         data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        selectContentVariants({ variant }),
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

interface SelectGroupLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {
  className?: string;
}

const SelectGroupLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectGroupLabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectGroupLabel.displayName = SelectPrimitive.Label.displayName;

const selectItemVariants = cva("", {
  variants: {
    variant: {
      standard: 'text-granite rounded-sm py-1.5 pl-2 pr-8 text-sm hover:bg-neutral-500',
      rounded: `px-4 py-2 cursor-pointer text-lg text-marine bg-white hover:bg-neutral-700`,
    },
  },
  defaultVariants: {
    variant: "standard",
  },
});

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
  VariantProps<typeof selectItemVariants> {
  className?: string;
}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, variant, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative outline-none select-none cursor-default flex items-center w-full data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      selectItemVariants({ variant }),
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {
  className?: string;
}

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectLabel,
};