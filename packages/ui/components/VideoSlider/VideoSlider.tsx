import React from "react";
import cn from "../Utils/cn";
import { motion, useMotionValue } from "framer-motion";

export interface VideoSliderProps extends React.HTMLAttributes<HTMLDivElement> { }

const VideoSlider = React.forwardRef<HTMLDivElement, VideoSliderProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("relative overflow-hidden flex flex-col ", className)}
				{...props}
			>
				{children}
			</div>
		);
	},
);

VideoSlider.displayName = "VideoSlider";

interface VideoSliderTabGroupProps extends React.HTMLAttributes<HTMLDivElement> { }

const VideoSliderTabGroup = React.forwardRef<
	HTMLDivElement,
	VideoSliderTabGroupProps
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"flex flex-row justify-center items-center w-full",
				className,
			)}
			{...props}
		>
			{props.children}
		</div>
	);
});

VideoSliderTabGroup.displayName = "VideoSliderTabGroup";

interface VideoSliderTabProps extends React.HTMLAttributes<HTMLDivElement> {
	index: number;
	activeIndex: number;
	setActiveIndex: (index: number | ((prev: number) => number)) => void;
}

const VideoSliderTab = React.forwardRef<HTMLDivElement, VideoSliderTabProps>(
	(
		{ className, children, index, activeIndex, setActiveIndex, ...props },
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					"cursor-pointer flex flex-col justify-center items-center py-4 scroll-smooth text-xl snap-center",
					index == activeIndex
						? "text-marine"
						: "text-neutral-400",
					className,
				)}
				{...props}
				onClick={() => setActiveIndex(index)}
			>
				<div
					className={cn(
						"flex w-2.5 h-2.5 mx-1.5 rounded-full transition-colors duration-500",
						index == activeIndex ? "bg-marine" : "bg-neutral-300",
						className,
					)}
				></div>
			</div>
		);
	},
);

VideoSliderTab.displayName = "VideoSliderTab";

interface VideoSliderItemGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	// children: React.ReactNode[];
	activeIndex: number;
	setActiveIndex: (index: number | ((prev: number) => number)) => void;
	nTabs: number;
	showArrows?: boolean;
	arrowColor?: string;
	cardType?: string;
}

const VideoSliderItemGroup = React.forwardRef<
	HTMLDivElement,
	VideoSliderItemGroupProps
>(({ className, children, activeIndex, setActiveIndex, nTabs, showArrows = false, arrowColor = 'marine', cardType , ...props }, ref) => {
	const [isDragging, setIsDragging] = React.useState(false);
	const dragX = useMotionValue(0);

	const onDragEnd = React.useCallback(() => {
		const x = dragX.get();

		setIsDragging(false);

		if (nTabs > 1) {
			if (x > 50) {
				setActiveIndex((prev: number) => Math.max(prev - 1, 0));
			} else if (x < -50) {
				setActiveIndex((prev: number) => Math.min(prev + 1, nTabs - 1));
			}
		}
	}, [nTabs]);

	const handlePrevNext = (direction: "prev" | "next") => {
		if (direction === "prev") {
			if (activeIndex > 0) {
				setActiveIndex(activeIndex - 1);
			}
		} else {
			if (activeIndex < nTabs - 1) {
				setActiveIndex(activeIndex + 1);
			}
		}
	}

	const arrowPosition = cardType == 'full' ? 'h-[40%] lg:h-[50%]' : 'h-[55%] lg:h-[65%]';

	return (
		<div
			ref={ref}
			className={cn(
				"flex flex-row justify-center items-center w-full scroll-smooth snap-center text-marine relatve",
				className,
			)}
			{...props}
		>
			{nTabs > 1 && showArrows ? <div onClick={() => handlePrevNext('prev')} className={`flex items-center absolute top-0 -left-4 z-50 cursor-pointer text-${arrowColor} hover:text-orange ${arrowPosition}`}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z" fill="currentColor" /></svg></div> : null}
			<motion.div
				drag="x"
				initial={false}
				dragConstraints={{ left: 0, right: 0 }}
				animate={{ translateX: `-${activeIndex * 100}%` }}
				onDragEnd={onDragEnd}
				dragMomentum={false}
				transition={{ ease: "easeIn", duration: 0.3 }}
				style={{ x: dragX, pointerEvents: isDragging ? "none" : "all", touchAction: "none" }}
				onDragStart={() => setIsDragging(true)}
				className={`flex flex-row cursor-grab active:cursor-grabbing z-10 ${nTabs > 1 && showArrows ? 'w-[98%]' : 'w-full'}`}
			>
				{children}
			</motion.div>
			{nTabs > 1 && showArrows ? <div onClick={() => handlePrevNext('next')} className={`flex items-center absolute top-0 -right-2.5 z-50 cursor-pointer text-${arrowColor} hover:text-orange ${arrowPosition}`}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" /></svg></div> : null}
		</div>
	);
});

VideoSliderItemGroup.displayName = "VideoSliderItemGroup";

const VideoSliderItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"flex-shrink-0 flex flex-col md:justify-center items-center w-full scroll-smooth snap-center",
				className,
			)}
			{...props}
		/>
	);
});

VideoSliderItem.displayName = "VideoSliderItem";

export {
	VideoSlider,
	VideoSliderItem,
	VideoSliderTabGroup,
	VideoSliderTab,
	VideoSliderItemGroup,
};
