import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  Carousel,
  CarouselItem,
  CarouselItemGroup,
  CarouselTab,
  CarouselTabGroup,
  CategoryCard,
  CategoryCardButton,
  CategoryCardDescription,
  CategoryCardSubtitle,
  CategoryCardTitle,
  VerticalSVGTicker,
} from "@global-x-etfs/gx-components";
import React, { useState } from "react";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExploreOurETFsCarousel: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <Card
        className="max-w-4xl flex flex-col w-full mx-auto"
        border="top_accent"
      >
        <h2 className="w-full flex justify-center text-3xl font-bold">
          Explore ETFs by Category
        </h2>

        <Carousel>
          <CarouselTabGroup>
            <CarouselTab
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              index={0}
            >
              Thematic
            </CarouselTab>
            <CarouselTab
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              index={1}
            >
              Income
            </CarouselTab>
            <CarouselTab
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              index={2}
            >
              Commodities
            </CarouselTab>
          </CarouselTabGroup>
          <CarouselItemGroup
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <CarouselItem>
              <CategoryCard>
                <CategoryCardTitle>Thematic Growth ETFs</CategoryCardTitle>
                <CategoryCardSubtitle>Harness Disruption</CategoryCardSubtitle>
                <CategoryCardDescription>
                  Investing in companies at the leading edge of long-term,
                  structural shifts in the global economy. Solutions primarily
                  target emerging technologies, changing consumer preferences,
                  and green innovation.
                </CategoryCardDescription>
                <CategoryCardButton>Explore</CategoryCardButton>
              </CategoryCard>
            </CarouselItem>
            <CarouselItem>
              <CategoryCard>
                <CategoryCardTitle>Income ETFs</CategoryCardTitle>
                <CategoryCardSubtitle>
                  Alternative Income Strategies
                </CategoryCardSubtitle>
                <CategoryCardDescription>
                  Policy interest rates appear to be plateauing, after a steep
                  rise. With potentially lower fixed income yields on the
                  horizon, investors may be looking for alternatives. Our Income
                  ETFs seek to meet this challenge by tilting toward
                  higher-yielding asset classes.
                </CategoryCardDescription>
                <CategoryCardButton>Explore</CategoryCardButton>
              </CategoryCard>
            </CarouselItem>
            <CarouselItem>
              <CategoryCard>
                <CategoryCardTitle>Commodities ETFs</CategoryCardTitle>
                <CategoryCardSubtitle>
                  Diversify Your Portfolio
                </CategoryCardSubtitle>
                <CategoryCardDescription>
                  Commodities are an important part of a diversified portfolio.
                  Our Commodities ETFs provide exposure to a variety of
                  commodities, including precious metals, energy, and
                  agriculture.
                </CategoryCardDescription>
                <CategoryCardButton>Explore</CategoryCardButton>
              </CategoryCard>
            </CarouselItem>
          </CarouselItemGroup>
        </Carousel>
      </Card>
    );
  },
};

export const ExploreETFsCardWithAnimatedIcons: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselData = {
      header: "Explore ETFs by Category",
      categories: [
        {
          category: "Thematic",
          title: "Thematic Growth ETFs",
          subTitle: "Harness Disruption",
          description:
            "Investing in companies at the leading edge of long-term, structural shifts in the global economy. Solutions primarily target emerging technologies, changing consumer preferences, and green innovation.",
          url: "/",
        },
        {
          category: "Income",
          title: "Income ETFs",
          subTitle: "Alternative Income Strategies",
          description:
            "Policy interest rates appear to be plateauing, after a steep rise. With potentially lower fixed income yields on the horizon, investors may be looking for alternatives. Our Income ETFs seek to meet this challenge by tilting toward higher-yielding asset classes.",
          url: "/",
        },
        {
          category: "Commodities",
          title: "Commodities ETFs",
          subTitle: "Diversify Your Portfolio",
          description:
            "Commodities are an important part of a diversified portfolio. Our Commodities ETFs provide exposure to a variety of commodities, including precious metals, energy, and agriculture.",
          url: "/",
        },
      ],
    };

    const iconsURL = [
      "https://cms-stage-cdn.globalxetfs.com/car-test.svg",
      "https://cms-stage-cdn.globalxetfs.com/AI-test.svg",
      "https://cms-stage-cdn.globalxetfs.com/building-test.svg",
      "https://cms-stage-cdn.globalxetfs.com/react-test.svg",
    ];

    return (
      <Card
        className="max-w-6xl flex py-12 md:px-28 flex-col w-full mx-auto -mb-24 relative shadow-xl"
        border="top_accent"
      >
        <h2 className="w-full flex justify-center text-3xl font-bold">
          {carouselData.header}
        </h2>

        <Carousel>
          <CarouselTabGroup>
            {carouselData.categories.map((category, index) => {
              return (
                <CarouselTab
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  index={index}
                  key={category.category}
                >
                  {category.category}
                </CarouselTab>
              );
            })}
          </CarouselTabGroup>
          <CarouselItemGroup
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            {carouselData.categories.map((category, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row">
                  <CategoryCard className="order-2 md:order-1">
                    <CategoryCardTitle>{category.title}</CategoryCardTitle>
                    <CategoryCardSubtitle>
                      {category.subTitle}
                    </CategoryCardSubtitle>
                    <CategoryCardDescription>
                      {category.description}
                    </CategoryCardDescription>

                    <CategoryCardButton>Explore</CategoryCardButton>
                  </CategoryCard>

                  <div className="order-1 md:order-2">
                    <VerticalSVGTicker
                      duration={4000}
                      iconsURL={iconsURL}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselItemGroup>
        </Carousel>
      </Card>
    );
  },
};
