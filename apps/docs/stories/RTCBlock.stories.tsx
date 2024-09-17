import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  RTCBlock,
  RTCBlockDescription,
  RTCBlockIcon,
  RTCBlockTitle,
} from "@global-x-etfs/gx-components";
import TargetedExposure from "./assets/TargetedExposure.svg";

const meta = {
  title: "Components/RTCBlock",
  component: RTCBlock,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RTCBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleRTCBlock: Story = {
  render: () => (
    <RTCBlock>
      <RTCBlockIcon imageURL={TargetedExposure} />
      <RTCBlockTitle>Exchange-Traded Funds (ETFS)</RTCBlockTitle>
      <RTCBlockDescription>
        A lineup that spans disruptive tech, equity income, commodities, digital
        assets, and more.
      </RTCBlockDescription>
    </RTCBlock>
  ),
};

export const MultipleRTCBlocks: Story = {
  render: () => (
    <Card className="w-full grid grid-cols-1 md:grid-cols-3 p-7 md:p-10 gap-x-12 ">
      <h1 className="text-4xl font-bold md:col-span-3 text-marine mb-7 w-full flex-grow">
        Reasons to Consider COPX
      </h1>
      <RTCBlock>
        <RTCBlockIcon imageURL={TargetedExposure} />
        <RTCBlockTitle>Targeted Exposure</RTCBlockTitle>
        <RTCBlockDescription>
          The ETF is a targeted play on copper mining
        </RTCBlockDescription>
      </RTCBlock>
      <RTCBlock>
        <RTCBlockIcon imageURL={TargetedExposure} />
        <RTCBlockTitle>Targeted Exposure</RTCBlockTitle>
        <RTCBlockDescription>
          The ETF is a targeted play on copper mining
        </RTCBlockDescription>
      </RTCBlock>
      <RTCBlock>
        <RTCBlockIcon imageURL={TargetedExposure} />
        <RTCBlockTitle>Targeted Exposure</RTCBlockTitle>
        <RTCBlockDescription>
          The ETF is a targeted play on copper mining
        </RTCBlockDescription>
      </RTCBlock>
      <p className="text-lg text-granite font-proxima leading-7 md:col-span-3">
        <span className="font-bold">Capital at Risk.</span> All financial
        investments involve an element of risk. Therefore, the value of your
        investment and the income from it will vary and your initial investment
        amount cannot be guaranteed.
      </p>
    </Card>
  ),
};
