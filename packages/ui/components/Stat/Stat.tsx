import React, { HTMLAttributes } from "react";
import cn from "../Utils/cn";

interface StatProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Stat({ children, className }: StatProps) {
  return (
    <div className={cn("w-full md:w-1/3 text-center py-10", className)}>
      {children}
    </div>
  );
}

interface StatTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  sup?: string;
  after?: string;
}

function StatTitle({ title, sup, after, className }: StatTitleProps) {
  return (
    <h3 className={cn("text-9xl text-orange leading-5 mb-4", className)}>
      <sub className="text-[40%] leading-10">{sup}</sub>
      {title}
      <span className="text-[50%]">{after}</span>
    </h3>
  );
}

interface StatDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  description: string;
}

function StatDescription({ description, className }: StatDescriptionProps) {
  return (
    <p className={cn("text-lg lg:text-2xl text-white font-proxima", className)}>
      {description}
    </p>
  );
}

interface StatSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  subtitle: string;
}

function StatSubtitle({ subtitle }: StatSubtitleProps) {
  return <i className={cn("text-sm text-white font-proxima")}>{subtitle}</i>;
}

export { Stat, StatTitle, StatDescription, StatSubtitle };
