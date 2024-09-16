import React, { HTMLAttributes } from "react";
import cn from "../Utils/cn";

interface Avatar extends HTMLAttributes<HTMLDivElement> { }

function Avatar({ children, className }: Avatar) {
  return (
    <div className={cn("max-w-sm flex flex-col items-center", className)}>
      {children}
    </div>
  );
}

interface AvatarImage extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

function AvatarImage({ src, alt, className }: AvatarImage) {
  return (
    <div className={className}>
      <img src={src} alt={alt} className={"rounded-full"} />
    </div>
  );
}

interface AvatarDetails extends HTMLAttributes<HTMLHeadingElement> {
  name: string;
  position: string;
}

function AvatarDetails({ name, position, className }: AvatarDetails) {
  return (
    <div className={cn("font-sans tracking-wide w-full text-center py-4 text-marine", className)}>
      <h3 className="text-3xl">{name}</h3>
      <p className="text-md">{position}</p>
    </div>
  );
}

export { Avatar, AvatarImage, AvatarDetails };
