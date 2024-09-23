import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  VideoCard,
} from "@global-x-etfs/gx-components";
import GlobalXLogo from "./assets/GX-Header-Logo.svg?react";
import UnitedKingdomLogo from "./assets/flags/unitedkingdom.svg?react";
import AustriaLogo from "./assets/flags/austria.svg?react";
import BelgiumLogo from "./assets/flags/belgium.svg?react";
import DenmarkLogo from "./assets/flags/denmark.svg?react";
import FinlandLogo from "./assets/flags/finland.svg?react";
import GermanyLogo from "./assets/flags/germany.svg?react";
import IrelandLogo from "./assets/flags/ireland.svg?react";
import ItalyLogo from "./assets/flags/italy.svg?react";
import LuxembourgLogo from "./assets/flags/luxembourg.svg?react";
import NetherlandsLogo from "./assets/flags/netherlands.svg?react";
import NorwayLogo from "./assets/flags/norway.svg?react";
import SpainLogo from "./assets/flags/spain.svg?react";
import SwedenLogo from "./assets/flags/sweden.svg?react";
import SwitzerlandLogo from "./assets/flags/switzerland.svg?react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SiteSelector: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Europe</DialogTrigger>
      <DialogContent className="">
        <DialogHeader className="bg-neutral-700 px-4 py-5">
          <DialogTitle className="pl-8 text-granite">
            Select Your Location
          </DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogDescription className="px-4 pb-7 text-md font-bold">
          <ul className="space-y-4 mt-4 pl-8 cursor-pointer text-marine">
            <li>United States</li>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Colombia</li>
            <li>Europe</li>
            <li>Hong Kong (SAR)</li>
            <li>Japan</li>
            <li>Singapore</li>
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  ),
};

export const EULocaleSelector: Story = {
  render: () => {
    const countries = [
      {
        name: "United Kingdom",
        href: "/",
        icon: <UnitedKingdomLogo />,
      },
      {
        name: "Austria",
        href: "/",
        icon: <AustriaLogo />,
      },
      {
        name: "Belgium",
        href: "/",
        icon: <BelgiumLogo />,
      },
      {
        name: "Denmark",
        href: "/",
        icon: <DenmarkLogo />,
      },
      {
        name: "Finland",
        href: "/",
        icon: <FinlandLogo />,
      },
      {
        name: "Germany",
        href: "/",
        icon: <GermanyLogo />,
      },
      {
        name: "Ireland",
        href: "/",
        icon: <IrelandLogo />,
      },
      {
        name: "Italy",
        href: "/",
        icon: <ItalyLogo />,
      },
      {
        name: "Luxembourg",
        href: "/",
        icon: <LuxembourgLogo />,
      },
      {
        name: "Netherlands",
        href: "/",
        icon: <NetherlandsLogo />,
      },
      {
        name: "Norway",
        href: "/",
        icon: <NorwayLogo />,
      },
      {
        name: "Spain",
        href: "/",
        icon: <SpainLogo />,
      },
      {
        name: "Sweden",
        href: "/",
        icon: <SwedenLogo />,
      },
      {
        name: "Switzerland",
        href: "/",
        icon: <SwitzerlandLogo />,
      },
    ];
    return (
      <Dialog>
      <DialogTrigger>United Kingdom</DialogTrigger>
      <DialogContent className="bg-marine md:border-8 md:border-white md:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Select Your Location</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <div className="overflow-hidden">
          <div className="md:mx-40">
            <div className="flex flex-col items-center gap-4 text-white py-10">
              <div className="w-72 ">
                <GlobalXLogo />
              </div>
              <h3 className="text-2xl font-bold border-b-2 border-orange pb-4 pt-10 px-8 leading-9">
                Select Your Location
              </h3>
            </div>
          </div>
          <div className="max-h-[50svh] md:max-h-[70svh] p-10 flex flex-wrap overflow-auto w-full  gap-y-4">
            {countries.map((country) => (
              <div
                className="flex justify-start gap-4 px-8 w-full sm:w-1/2 md:w-1/3 place-items-center text-white hover:text-orange-hover transition-colors duration-300"
                key={country.name}
              >
                <div className="w-12 h-12">{country.icon}</div>
                <a href={country.href}>{country.name}</a>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
    );
  },
};

export const VideoDialog: Story = {
  render: () => {
    const funds = [
      {
        vimeoId: 584920343,
        coverImageURL:
          "https://globalxetfs.eu/content/files/230328-Morgane_Digital-Economy.png",
        videoURL:
          "https://player.vimeo.com/video/?title=0&byline=0&portrait=0&color=FF5400",
        title: "Digital Economy: Using a Thematic Investing Strategy",
        description:
          "Director of Research Morgane Delledonne charts the rise of the digital economy and illustrates how investors can harness disruption through thematic investing.",
      },
    ];

    return (
      <div className="md:py-20">
        <div className="flex flex-row gap-4 w-full justify-center  px-4 relative">
          <div className="shrink-0 w-full">
            <h3 className="pb-4 text-md font-bold text-marine tracking-wider">
              FEATURED INSIGHTS
            </h3>
            {funds.map((fund) => (
              <div className="flex flex-col ">
                <Dialog>
                  <DialogTrigger>
                    <VideoCard {...fund} />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl rounded-3xl border-none">
                    <DialogHeader className="bg-marine rounded-t-3xl pr-2">
                      <DialogTitle>{fund.title}</DialogTitle>
                      <DialogClose />
                    </DialogHeader>
                    <div className="flex flex-col w-full text-marine text-3xl pb-8 -mt-0.5">
                      <div className="flex flex-row md:px-7 px-4 pb-6 justify-between items-center bg-marine">
                        <iframe
                          allowFullScreen
                          aria-label="Global X Etfs Video"
                          className="aspect-video grow"
                          src={`https://player.vimeo.com/video/${fund.vimeoId}?title=0&byline=0&portrait=0&color=FF5400`}
                        />
                      </div>
                      <div className="pt-4 px-7">
                        <h1 className="font-bold text-md text-granite leading-10 tracking-wider">NOW PLAYING</h1>
                        <h2 className="text-3xl">
                          {fund.title}
                        </h2>
                        <p className="font-proxima text-lg text-granite my-4">
                          {fund.description}
                        </p>
                        <div className="flex flex-row justify-between">
                          <Button
                            beforeContent="arrowback"
                            className="mx-auto w-full mt-5 text-lg text-left hover:before:-left-1"
                          >
                            Previous Video
                          </Button>
                          <Button
                            afterContent="arrow"
                            className="mx-auto w-full mt-5 text-lg text-right hover:after:left-0"
                          >
                            Next Video
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </div >
    );
  },
};
// max-h-[869px] h-[95svh] w-[100svw] md:w-auto
