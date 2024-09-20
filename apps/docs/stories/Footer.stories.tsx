import type { Meta, StoryObj } from "@storybook/react";
import { Button, Footer, FooterSection } from "@global-x-etfs/gx-components";
import GlobalXLogo from "./assets/GlobalX.svg?react";
import EmailIcon from "./assets/email.svg?react";
import LinkedInIcon from "./assets/LinkedIn.svg?react";
import TwitterIcon from "./assets/Twitter.svg?react";
import FacebookIcon from "./assets/Facebook.svg?react";
import InstagramIcon from "./assets/Instagram.svg?react";
import TikTokIcon from "./assets/TikTok.svg?react";
import YoutubeIcon from "./assets/youtube.svg?react";
import GptwIcon from "./assets/GreatPlaceToWork.svg?react";

const meta: Meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleUSFooter: Story = {
  render: () => (
    <Footer>
      <FooterSection>
        <GlobalXLogo className="ml-0 mr-auto mt-2 h-20" />
      </FooterSection>
      <FooterSection
        isVisibleMobile
        isGroupedVerticallyMobile
        className="flex-col leading-7 "
      >
        <Button className="text-left" variant="footer">
          Our ETFs
        </Button>
        <Button className="text-left" variant="footer">
          Insights
        </Button>
        <Button className="text-left" variant="footer">
          About
        </Button>
      </FooterSection>
      <FooterSection
        isVisibleMobile
        isGroupedVerticallyMobile
        className="flex flex-col leading-7 "
      >
        <Button className="text-left" variant="footer">
          Contact
        </Button>
        <Button className="text-left" variant="footer">
          News
        </Button>
        <Button className="text-left" variant="footer">
          Privacy Policy
        </Button>
      </FooterSection>
      <div className="bg-teal mt-10 h-[1px] w-full items-center md:hidden"></div>

      <FooterSection
        isVisibleMobile
        className="shrink-1 flex flex-col space-y-6"
      >
        <div className="flex w-full flex-row items-center gap-2 ">
          <EmailIcon className="h-5 w-5 fill-neutral-200" />
          <Button variant="white" afterContent="arrow">
            Subscribe to Updates
          </Button>
        </div>

        <div className="flex flex-row items-center justify-between gap-2 fill-neutral-400">
          <LinkedInIcon className="hover:fill-neutral-600 " />
          <TwitterIcon className="hover:fill-neutral-600" />
          <FacebookIcon className="hover:fill-neutral-600" />
          <InstagramIcon className="hover:fill-neutral-600" />
          <YoutubeIcon className="hover:fill-neutral-600" />
          <TikTokIcon className="hover:fill-neutral-600" />
        </div>
      </FooterSection>
      <FooterSection isVisibleMobile className="">
        <GptwIcon className="ml-auto mr-0 mt-2 h-28" />
      </FooterSection>
    </Footer>
  ),
};

export const ExampleEUFooter: Story = {
  render: () => (
    <Footer>
      <FooterSection>
        <GlobalXLogo className="ml-0 mr-auto mt-2 h-20" />
      </FooterSection>
      <FooterSection
        isVisibleMobile
        isGroupedVerticallyMobile
        className="flex-col leading-7 "
      >
        <Button className="text-left" variant="footer">
          Our ETFs
        </Button>
        <Button className="text-left" variant="footer">
          Insights
        </Button>
        <Button className="text-left" variant="footer">
          About
        </Button>
        <Button className="text-left" variant="footer">
          News
        </Button>
        <Button className="text-left" variant="footer">
          Contact
        </Button>
      </FooterSection>
      <FooterSection
        isVisibleMobile
        isGroupedVerticallyMobile
        className="flex flex-col leading-7 "
      >
        <Button className="text-left" variant="footer">
          Risk Disclosures
        </Button>
        <Button className="text-left" variant="footer">
          Privacy Policy
        </Button>
        <Button className="text-left" variant="footer">
          Complaints Policy
        </Button>
        <Button className="text-left" variant="footer">
          ManCo Information
        </Button>
        <Button className="text-left" variant="footer">
          Terms of Use
        </Button>
      </FooterSection>
      <div className="bg-teal mt-10 h-[1px] w-full items-center md:hidden"></div>
      {/* Two empty sections to provide spacing */}
      <FooterSection />
      <FooterSection />
      <FooterSection isVisibleMobile className="">
        <GptwIcon className="ml-auto mr-0 mt-2 h-28" />
      </FooterSection>
    </Footer>
  ),
};
