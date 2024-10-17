import type { Meta, StoryObj } from "@storybook/react";
import {
  Hero,
  HeroTitle,
  HeroSubtitle,
  HeroActionButton,
  HeroRating,
  HeroHeader,
  HeroContent,
  Button,
  Card,
  ExpandableNav,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  MainNav,
  MainNavItem,
  MenuProvider,
  NavItem,
} from "@global-x-etfs/gx-components";
import GlobalXLogo from "./assets/GX-Header-Logo.svg?react";
import Caret from "./assets/Caret.svg?react";

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

export const EmptyHero: Story = {
  render: () => {
    return (
      <div className="w-screen">
        <NavigationHeader />
      <Hero
        variant="empty"
        backgroundImageURL="https://staging-assets.globalxetfs.com/images/TopographicPattern.svg"
      />
      </div>
    );
  },
};

const NavigationHeader = () => {
  return (
    <div className="max-w-1268 mx-auto z-20">
        <MenuProvider>
          <MainNav icon={<GlobalXLogo />} iconURL="/">
            {/* Our ETFs */}
            <MainNavItem>
              <a href="https://www.globalxetfs.eu/explore">Our ETFs</a>
            </MainNavItem>

            {/* Insights */}
            <MainNavItem>
              <a href="https://www.globalxetfs.eu/insights">Insights</a>
            </MainNavItem>

            {/* About */}
            <MainNavItem className="hidden lg:flex">
              <div className="hidden lg:block">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger className="flex group/about hover:fill-orange fill-white justify-around items-center">
                    About
                    <Caret className="group-hover/about:rotate-180 ease-in transition mx-2 w-2 h-2" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <Card border="top_accent" className="p-7 flex flex-col gap-6 mt-4">
                      <a href="https://www.globalxetfs.eu/about">
                        <Button className="text-marine font-normal text-md">
                          Get to Know Us
                        </Button>
                      </a>
                      <a href="https://www.globalxetfs.eu/how-to-invest">
                        <Button className="text-marine font-normal text-md">
                          How to Invest
                        </Button>
                      </a>
                      <a href="https://www.globalxetfs.eu/where-to-buy">
                        <Button className="text-marine font-normal text-md">
                          Where to Buy
                        </Button>
                      </a>
                    </Card>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </MainNavItem>
            <ExpandableNav className="flex lg:hidden" refName="About">
              <NavItem>
                <a href="https://www.globalxetfs.eu/about">Get to Know Us</a>
              </NavItem>
              <NavItem>
                <a href="https://www.globalxetfs.eu/where-to-buy">
                  Where to Buy
                </a>
              </NavItem>
            </ExpandableNav>

            {/* Stay in Touch */}
            <MainNavItem className="hidden lg:flex">
              <HoverCard openDelay={200}>
                <HoverCardTrigger className="flex group/about hover:fill-orange fill-white justify-around items-center">
                  Stay in Touch
                  <Caret className="group-hover/about:rotate-180 ease-in transition mx-2 w-2 h-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <Card border="top_accent" className="p-7 flex flex-col gap-6 mt-4">
                    <a href="https://www.globalxetfs.eu/where-to-buy">
                      <Button className="text-marine font-normal text-md">
                        Contact Now
                      </Button>
                    </a>
                  </Card>
                </HoverCardContent>
              </HoverCard>
            </MainNavItem>
            <ExpandableNav className="flex lg:hidden" refName="Stay in Touch">
              <NavItem>
                <a href="https://www.globalxetfs.eu/contact">Contact Now</a>
              </NavItem>
            </ExpandableNav>
          </MainNav>
        </MenuProvider>
      </div>
  );
}