import type { Meta, StoryObj } from "@storybook/react";
import {
	Card,
	VideoSlider,
	VideoSliderItem,
	VideoSliderItemGroup,
	VideoSliderTab,
	VideoSliderTabGroup,
	CategoryCard,
} from "@global-x-etfs/gx-components";
import React, { useState } from "react";
import VideoPlayerIcon from "../stories/assets/VideoPlayer.svg?react";

const meta = {
	title: "Components/VideoSlider",
	component: VideoSlider,
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof VideoSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleVideoSlider: Story = {
	render: () => {
		const [activeIndex, setActiveIndex] = useState(0); //The index of the active tab
		const [nTabs, setnTabs] = useState(2); //The total number of tabs

		return (
			<Card className="hidden md:flex flex-col w-full mx-auto bg-transparent p-0">
				<VideoSlider>
					<VideoSliderItemGroup activeIndex={activeIndex} setActiveIndex={setActiveIndex} nTabs={nTabs} showArrows>

						<VideoSliderItem>
							<div className="grid grid-cols-3">
								<CategoryCard
									className="col-span-1 text-left px-3 md:px-3 py-0 md:py-0 [&>p]:hover:opacity-100 min-h-[360px]"
								>
									<div className="relative">
										<img
											src="https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg"
											alt="Thomas Park"
											className="brightness-75"
											draggable="false"
											width={380}
											height={215}
										/>
										<VideoPlayerIcon className="absolute left-[41%] top-[35%] w-12 h-auto -mt-0.5 mr-3 cursor-pointer fill-white" />
									</div>
									<p className="font-sans text-2xl text-marine leading-tight hover:text-orange mt-6 mb-3">
										Advances in Artificial Intelligence with Cartwheel Co-Founder Andrew Carr
									</p>
									<p className="font-proxima text-md text-granite my-4">
										Andrew Carr (Co-Founder of Cartwheel) discusses how numerous artificial intelligence applications are disrupting businesses and industries.
									</p>
								</CategoryCard>
								<CategoryCard
									className="col-span-1 text-left px-3 md:px-3 py-0 md:py-0 [&>p]:hover:opacity-100 min-h-[360px]"
								>
									<div className="relative">
										<img
											src="https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg"
											alt="Thomas Park"
											className="brightness-75"
											draggable="false"
											width={380}
											height={215}
										/>
										<VideoPlayerIcon className="absolute left-[41%] top-[35%] w-12 h-auto -mt-0.5 mr-3 cursor-pointer fill-white" />
									</div>
									<p className="font-sans text-2xl text-marine leading-tight hover:text-orange mt-6 mb-3">
										Advances in Artificial Intelligence with Cartwheel Co-Founder Andrew Carr
									</p>
									<p className="font-proxima text-md text-granite my-4">
										Andrew Carr (Co-Founder of Cartwheel) discusses how numerous artificial intelligence applications are disrupting businesses and industries.
									</p>
								</CategoryCard>
								<CategoryCard
									className="col-span-1 text-left px-3 md:px-3 py-0 md:py-0 [&>p]:hover:opacity-100 min-h-[360px]"
								>
									<div className="relative">
										<img
											src="https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg"
											alt="Thomas Park"
											className="brightness-75"
											draggable="false"
											width={380}
											height={215}
										/>
										<VideoPlayerIcon className="absolute left-[41%] top-[35%] w-12 h-auto -mt-0.5 mr-3 cursor-pointer fill-white" />
									</div>
									<p className="font-sans text-2xl text-marine leading-tight hover:text-orange mt-6 mb-3">
										Advances in Artificial Intelligence with Cartwheel Co-Founder Andrew Carr
									</p>
									<p className="font-proxima text-md text-granite my-4">
										Andrew Carr (Co-Founder of Cartwheel) discusses how numerous artificial intelligence applications are disrupting businesses and industries.
									</p>
								</CategoryCard>
							</div>
						</VideoSliderItem>

						<VideoSliderItem>
							<div className="grid grid-cols-3">
								<CategoryCard
									className="col-span-1 text-left px-3 md:px-3 py-0 md:py-0 [&>p]:hover:opacity-100 min-h-[360px]"
								>
									<div className="relative">
										<img
											src="https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg"
											alt="Thomas Park"
											className="brightness-75"
											draggable="false"
											width={380}
											height={215}
										/>
										<VideoPlayerIcon className="absolute left-[41%] top-[35%] w-12 h-auto -mt-0.5 mr-3 cursor-pointer fill-white" />
									</div>
									<p className="font-sans text-2xl text-marine leading-tight hover:text-orange mt-6 mb-3">
										Advances in Artificial Intelligence with Cartwheel Co-Founder Andrew Carr
									</p>
									<p className="font-proxima text-md text-granite my-4">
										Andrew Carr (Co-Founder of Cartwheel) discusses how numerous artificial intelligence applications are disrupting businesses and industries.
									</p>
								</CategoryCard>
								<CategoryCard
									className="col-span-1 text-left px-3 md:px-3 py-0 md:py-0 [&>p]:hover:opacity-100 min-h-[360px]"
								>
									<div className="relative">
										<img
											src="https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg"
											alt="Thomas Park"
											className="brightness-75"
											draggable="false"
											width={380}
											height={215}
										/>
										<VideoPlayerIcon className="absolute left-[41%] top-[35%] w-12 h-auto -mt-0.5 mr-3 cursor-pointer fill-white" />
									</div>
									<p className="font-sans text-2xl text-marine leading-tight hover:text-orange mt-6 mb-3">
										Advances in Artificial Intelligence with Cartwheel Co-Founder Andrew Carr
									</p>
									<p className="font-proxima text-md text-granite my-4">
										Andrew Carr (Co-Founder of Cartwheel) discusses how numerous artificial intelligence applications are disrupting businesses and industries.
									</p>
								</CategoryCard>
								<CategoryCard
									className="col-span-1 text-left px-3 md:px-3 py-0 md:py-0 [&>p]:hover:opacity-100 min-h-[360px]"
								>
									<div className="relative">
										<img
											src="https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg"
											alt="Thomas Park"
											className="brightness-75"
											draggable="false"
											width={380}
											height={215}
										/>
										<VideoPlayerIcon className="absolute left-[41%] top-[35%] w-12 h-auto -mt-0.5 mr-3 cursor-pointer fill-white" />
									</div>
									<p className="font-sans text-2xl text-marine leading-tight hover:text-orange mt-6 mb-3">
										Advances in Artificial Intelligence with Cartwheel Co-Founder Andrew Carr
									</p>
									<p className="font-proxima text-md text-granite my-4">
										Andrew Carr (Co-Founder of Cartwheel) discusses how numerous artificial intelligence applications are disrupting businesses and industries.
									</p>
								</CategoryCard>
							</div>
						</VideoSliderItem>

					</VideoSliderItemGroup>
					<VideoSliderTabGroup>
						<VideoSliderTab activeIndex={activeIndex} setActiveIndex={setActiveIndex} index={0} />
						<VideoSliderTab activeIndex={activeIndex} setActiveIndex={setActiveIndex} index={1} />
					</VideoSliderTabGroup>
				</VideoSlider>
			</Card>
		);
	},
};
