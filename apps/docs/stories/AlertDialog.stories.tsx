import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
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

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EULocaleSelector: Story = {
  render: () => {
    const countries = [
      {
        name: "United Kingdom",
        icon: <UnitedKingdomLogo />,
      },
      {
        name: "Austria",
        icon: <AustriaLogo />,
      },
      {
        name: "Belgium",
        icon: <BelgiumLogo />,
      },
      {
        name: "Denmark",
        icon: <DenmarkLogo />,
      },
      {
        name: "Finland",
        icon: <FinlandLogo />,
      },
      {
        name: "Germany",
        icon: <GermanyLogo />,
      },
      {
        name: "Ireland",
        icon: <IrelandLogo />,
      },
      {
        name: "Italy",
        icon: <ItalyLogo />,
      },
      {
        name: "Luxembourg",
        icon: <LuxembourgLogo />,
      },
      {
        name: "Netherlands",
        icon: <NetherlandsLogo />,
      },
      {
        name: "Norway",
        icon: <NorwayLogo />,
      },
      {
        name: "Spain",
        icon: <SpainLogo />,
      },
      {
        name: "Sweden",
        icon: <SwedenLogo />,
      },
      {
        name: "Switzerland",
        icon: <SwitzerlandLogo />,
      },
    ];
    return (
      <AlertDialog>
        <AlertDialogTrigger className="">United Kingdom</AlertDialogTrigger>
        <AlertDialogContent className="bg-marine md:border-8 md:border-white md:max-w-4xl">
          <AlertDialogHeader>
            {/* <AlertDialogTitle>Select Your Location</AlertDialogTitle> */}
          </AlertDialogHeader>
          <AlertDialogDescription>
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
                    className="flex justify-start gap-4 px-8 w-full sm:w-1/2 md:w-1/3 place-items-center text-white cursor-pointer hover:text-orange-hover transition-colors duration-300"
                    key={country.name}
                  >
                    <div className="w-12 h-12">{country.icon}</div>
                    {country.name}
                  </div>
                ))}
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

export const InvestorTypeSelectorDialog: Story = {
  render: () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger className="">Select Investor Type</AlertDialogTrigger>
        <AlertDialogContent className="bg-marine md:border-8 md:border-white md:max-w-4xl">
          <AlertDialogDescription>
            <div className="overflow-hidden ">
              <div className="md:mx-32 mx-auto">
                <div className="w-72 mx-auto my-8 ">
                  <GlobalXLogo />
                </div>
                <h3 className="text-2xl text-white font-bold text-center  border-b-2 border-orange pb-4 pt-10 px-8 leading-9">
                 Select Your Investor Type
                </h3>
              </div>

              <RadioGroup className="flex justify-evenly py-12 w-full gap-4 ">
                  <AlertDialogAction className="group flex items-center space-x-4">
                  <RadioGroupItem
                    className="group-hover:border-orange-hover transition-colors duration-300"
                    value="individual"
                  />
                  <RadioGroupLabel
                    className="text-white text-xl font-normal group-hover:cursor-pointer group-hover:text-orange-hover transition-colors duration-300"
                    htmlFor="individual"
                  >
                    Individual Investor
                  </RadioGroupLabel>
                  </AlertDialogAction>
                <AlertDialogAction className="group flex items-center space-x-4">
                  <RadioGroupItem
                    className="group-hover:border-orange-hover transition-colors duration-300"
                    value="institutional"
                  />
                  <RadioGroupLabel
                    className="text-white text-xl font-normal group-hover:cursor-pointer group-hover:text-orange-hover transition-colors duration-300"
                    htmlFor="institutional"
                  >
                    Institutional Investor
                  </RadioGroupLabel>
                </AlertDialogAction>
              </RadioGroup>
            </div>
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};
