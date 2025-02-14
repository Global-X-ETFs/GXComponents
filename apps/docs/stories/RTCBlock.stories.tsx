import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  RTCBlock,
  RTCBlockDescription,
  RTCBlockIcon,
  RTCBlockTitle,
} from "@global-x-etfs/gx-components";

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
    <div className="w-96">
      <RTCBlock variant="fund">
        <RTCBlockIcon imageURL="https://assets.globalxetfs.com/svg-icons/AIQ.svg" fillOrange />
        <RTCBlockTitle variant="fund">Exchange-Traded Funds (ETFS)</RTCBlockTitle>
        <RTCBlockDescription variant="fund">
          A lineup that spans disruptive tech, equity income, commodities, digital assets, and more.
        </RTCBlockDescription>
      </RTCBlock>
    </div>
  ),
};

export const MultipleRTCBlocks: Story = {
  render: () => (
    <Card className="w-full grid grid-cols-1 md:grid-cols-3 p-7 md:p-10 gap-x-12 ">
      <h1 className="text-4xl font-bold md:col-span-3 text-marine mb-7 w-full flex-grow">
        Reasons to Consider COPX
      </h1>
      <RTCBlock variant="fund">
        <RTCBlockIcon imageURL="https://assets.globalxetfs.com/svg-icons/AIQ.svg" fillOrange />
        <RTCBlockTitle variant="fund">Exchange-Traded Funds (ETFS)</RTCBlockTitle>
        <RTCBlockDescription variant="fund">
          A lineup that spans disruptive tech, equity income, commodities, digital assets, and more.
        </RTCBlockDescription>
      </RTCBlock>
      <RTCBlock variant="fund">
        <RTCBlockIcon imageURL="https://assets.globalxetfs.com/svg-icons/AIQ.svg" fillOrange />
        <RTCBlockTitle variant="fund">Exchange-Traded Funds (ETFS)</RTCBlockTitle>
        <RTCBlockDescription variant="fund">
          A lineup that spans disruptive tech, equity income, commodities, digital assets, and more.
        </RTCBlockDescription>
      </RTCBlock>
      <RTCBlock variant="fund">
        <RTCBlockIcon imageURL="https://assets.globalxetfs.com/svg-icons/AIQ.svg" fillOrange />
        <RTCBlockTitle variant="fund">Exchange-Traded Funds (ETFS)</RTCBlockTitle>
        <RTCBlockDescription variant="fund">
          A lineup that spans disruptive tech, equity income, commodities, digital assets, and more.
        </RTCBlockDescription>
      </RTCBlock>
      <p className="text-md text-granite font-proxima leading-7 md:col-span-3">
        <span className="font-bold">Capital at Risk.</span> All financial
        investments involve an element of risk. Therefore, the value of your
        investment and the income from it will vary and your initial investment
        amount cannot be guaranteed.
      </p>
    </Card>
  ),
};
