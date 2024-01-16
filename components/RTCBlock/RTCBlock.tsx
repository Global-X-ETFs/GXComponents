import React from "react";

export interface RTCBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  title: string;
  description: string;
}

const RTCBlock = React.forwardRef<HTMLDivElement, RTCBlockProps>(
  ({ className, icon, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col items-start w-full font-proxima mb-7"
        {...props}
      >
        <img src={icon} alt={title} className="h-28 w-auto object-cover mb-5" />
        <div className="divide-y divide-granite w-full gap-y-3">
          <h3 className="font-bold text-xl text-marine pb-2">{title}</h3>

          <p className="text-ml text-granite pt-2">{description}</p>
        </div>
      </div>
    );
  },
);

export { RTCBlock };
