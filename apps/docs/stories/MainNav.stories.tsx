import type { Meta, StoryObj } from "@storybook/react";
import {
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
import Caret from "./assets/Caret.svg?react";
import GlobalXLogo from "./assets/GX-Header-Logo.svg?react";

const meta: Meta = {
  title: "Components/MainNav",
  component: MainNav,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {},
  render: function Render() {
    return (
      <div className="w-[calc(100vw-60px)] lg:w-[900px] mx-auto z-20 bg-marine px-4 py-10">
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
                    <Card
                      border="top_accent"
                      className="p-7 flex flex-col gap-6 mt-4"
                    >
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
                  <Card
                    border="top_accent"
                    className="p-7 flex flex-col gap-6 mt-4"
                  >
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
  },
};
