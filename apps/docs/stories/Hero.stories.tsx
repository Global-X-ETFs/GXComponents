import type { Meta, StoryObj } from "@storybook/react";
import {
  Hero,
  HeroTitle,
  HeroSubtitle,
  HeroActionButton,
  HeroRating,
  HeroHeader,
  HeroContent,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const HomeHero: Story = {
  render: () => (
    <Hero
      variant="home"
      backgroundImageURL="https://staging-assets.globalxetfs.com/images/hero_bg_map.svg"
      className="bg-marine"
    >
      <HeroTitle sup="®" variant="home">
        Beyond Ordinary ETFs
      </HeroTitle>
      <HeroSubtitle>
        Investing in companies at the leading edge of trends disrupting our
        economy and reshaping the future. Solutions focus on structural shifts
        in technology.
      </HeroSubtitle>
    </Hero>
  ),
};

export const BasicHero: Story = {
  render: () => (
    <Hero
      variant="basic"
      backgroundImageURL="https://staging-assets.globalxetfs.com/images/TopographicPattern.svg"
    >
      <HeroTitle variant="basic">Explore Every Angle</HeroTitle>
      <HeroSubtitle variant="page">
        Thoroughly researched perspectives and commentary on the trends shaping
        global markets.
        <HeroActionButton>Subscribe</HeroActionButton>
      </HeroSubtitle>
    </Hero>
  ),
};

export const BasicIndentedHero: Story = {
  render: () => (
    <Hero
      variant="basic"
      backgroundImageURL="https://staging-assets.globalxetfs.com/images/TopographicPattern.svg"
    >
      <HeroTitle variant="basic-indented">In The News</HeroTitle>
    </Hero>
  ),
};

export const FundHero: Story = {
  render: () => (
    <Hero
      variant="fund"
      backgroundImageURL="https://staging-assets.globalxetfs.com/images/TopographicPattern.svg"
    >
      <HeroHeader variant="fund">
        <HeroTitle variant="fund">QYLD</HeroTitle>
        <HeroSubtitle variant="fund">Nasdaq 100 Covered Call ETF</HeroSubtitle>
      </HeroHeader>
      <HeroContent variant="fund">
        <HeroActionButton>Invest In QYLD</HeroActionButton>
        <HeroRating rating={4} rater="Morningstar Rating™">
          - Overall rating out of 73 Derivative Income funds, based on
          risk-adjusted returns as of 04/30/2024
        </HeroRating>
      </HeroContent>
    </Hero>
  ),
};
