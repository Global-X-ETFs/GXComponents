import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { FundCard } from "./FundCard";

const meta = {
  title: "Components/FundCard",
  component: FundCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FundCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BOTZFund: Story = {
  args: {
    src: "/BotzLogo.svg",
    alt: "Botz Logo",
    title: "Robotics & Aritifical Intelligence ETF",
    subtitle: "BOTZ",
  },
};

export const AIQFund: Story = {
  args: {
    src: "/AIQLogo.svg",
    alt: "AIQ Logo",
    title: "Artificial Intelligence & Technology ETF",
    subtitle: "AIQ",
  },
};

export const PAVEFund: Story = {
  args: {
    src: "/PAVELogo.svg",
    alt: "PAVE Logo",
    title: "U.S. Infrastructure Development ETF",
    subtitle: "PAVE",
  },
};

export const EMCFund: Story = {
  args: {
    src: "/EMCLogo.svg",
    alt: "EMC Logo",
    title: "Emerging Markets Great Consumer ETF",
    subtitle: "EMC",
  },
};

export const QYLDFund: Story = {
  args: {
    src: "/QYLDLogo.svg",
    alt: "QYLD Logo",
    title: "Nasdaq 100 Covered Call ETF",
    subtitle: "QYLD",
  },
};

export const MissingImage: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    alt: "Robotics & Aritifical Intelligence ETF",
    title: "Missing Image",
    subtitle: "MISS",
  },
};

export const MissingTitle: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    src: "/BotzLogo.svg",
    alt: "Botz Logo",
    subtitle: "BOTZ",
  },
};

export const MissingSubtitle: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    src: "/BotzLogo.svg",
    alt: "Botz Logo",
    title: "Robotics & Aritifical Intelligence ETF",
  },
};

export const MissingAltText: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    src: "/BotzLogo.svg",
    title: "Robotics & Aritifical Intelligence ETF",
    subtitle: "BOTZ",
  },
};
