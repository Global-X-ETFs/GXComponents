import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  ImageSlider,
  ImageSliderItem,
  ImageSliderItemGroup,
  ImageSliderTab,
  ImageSliderTabGroup,
  CategoryCard,
} from "@global-x-etfs/gx-components";
import React, { useState } from "react";

const meta = {
  title: "Components/ImageSlider",
  component: ImageSlider,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ImageSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExploreOurETFsImageSlider: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(3);

    return (
      <Card
        className="max-w-4xl flex flex-col w-full mx-auto"
      >
        <ImageSlider>
          <ImageSliderItemGroup
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            totalItems={totalItems}
          >
            <ImageSliderItem>
              <CategoryCard>
                <img
                  src="https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg"
                  alt="Thomas Park"
                  className="mt-8 aspect-square"
                  draggable="false"
                />
              </CategoryCard>
            </ImageSliderItem>
            <ImageSliderItem>
              <CategoryCard>
                <img
                  src="https://cms-stage-cdn.globalxetfs.com/230602-Malcolm_Emerging-Markets.jpg"
                  alt="Thomas Park"
                  className="mt-8 aspect-square"
                  draggable="false"
                />
              </CategoryCard>
            </ImageSliderItem>
            <ImageSliderItem>
              <CategoryCard>
                <img
                  src="https://cms-stage-cdn.globalxetfs.com/231121-Tejas_Nvidia-Q3-Earnings.jpg"
                  alt="Thomas Park"
                  className="mt-8 aspect-square"
                  draggable="false"
                />
              </CategoryCard>
            </ImageSliderItem>
          </ImageSliderItemGroup>
          <ImageSliderTabGroup>
            <ImageSliderTab
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              index={0}
            >
            </ImageSliderTab>
            <ImageSliderTab
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              index={1}
            >
            </ImageSliderTab>
            <ImageSliderTab
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              index={2}
            >
            </ImageSliderTab>
          </ImageSliderTabGroup>
        </ImageSlider>
      </Card>
    );
  },
};
