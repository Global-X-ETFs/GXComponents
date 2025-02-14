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

const videos = [
	{
		image: "https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg",
		title: "An Active Approach for Emerging Markets",
		description: "Explore why we chose an actively managed approach to investing in emerging markets.",
	},
	{
		image: "https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg",
		title: "An Active Approach for Emerging Markets",
		description: "Explore why we chose an actively managed approach to investing in emerging markets.",
	},
	{
		image: "https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg",
		title: "An Active Approach for Emerging Markets",
		description: "Explore why we chose an actively managed approach to investing in emerging markets.",
	},
];

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
					<VideoSliderItemGroup activeIndex={activeIndex} setActiveIndex={setActiveIndex} nTabs={nTabs} showArrows arrowColor="marine" cardType="full">

						{ [...Array(2)].map((_, index) => (
							<VideoSliderItem key={index}>
								<div className="grid grid-cols-3">
									{ videos.map((video, index) => (
										<CategoryCard
											className="text-left px-3.5 md:px-3.5 py-0 md:py-0 [&>p]:hover:opacity-100 min-h-[360px]"
										>
											<div className="relative">
												<img
													src={video.image}
													alt="Thomas Park"
													className="brightness-75"
													draggable="false"
													width={380}
													height={215}
												/>
												<VideoPlayerIcon className="absolute left-[41%] top-[35%] w-12 h-auto -mt-0.5 mr-3 cursor-pointer fill-white" />
											</div>
											<p className="font-sans text-2xl text-marine leading-tight hover:text-orange mt-6 mb-3">
												{video.title}
											</p>
											<p className="font-proxima text-md text-granite my-4">
												{video.description}
											</p>
										</CategoryCard>
									))}
								</div>
							</VideoSliderItem>
						))}
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
