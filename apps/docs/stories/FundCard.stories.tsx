import type { Meta, StoryObj } from "@storybook/react";
import { FundCard } from "@global-x-etfs/gx-components";

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
    src: "https://staging-assets.globalxetfs.com/icons/BOTZ.svg",
    alt: "Botz Logo",
    title: "Robotics & Aritifical Intelligence ETF",
    subtitle: "BOTZ",
  },
};

export const AIQFund: Story = {
  args: {
    src: "https://staging-assets.globalxetfs.com/icons/AIQ.svg",
    alt: "AIQ Logo",
    title: "Artificial Intelligence & Technology ETF",
    subtitle: "AIQ",
  },
};

export const PAVEFund: Story = {
  args: {
    src: "https://staging-assets.globalxetfs.com/icons/PAVE.svg",
    alt: "PAVE Logo",
    title: "U.S. Infrastructure Development ETF",
    subtitle: "PAVE",
  },
};

export const EMCFund: Story = {
  args: {
    src: "https://staging-assets.globalxetfs.com/icons/EMC.svg",
    alt: "EMC Logo",
    title: "Emerging Markets Great Consumer ETF",
    subtitle: "EMC",
  },
};

export const QYLDFund: Story = {
  args: {
    src: "https://staging-assets.globalxetfs.com/icons/QYLD.svg",
    alt: "QYLD Logo",
    title: "Nasdaq 100 Covered Call ETF",
    subtitle: "QYLD",
  },
};

export const MissingImage: Story = {
  args: {
    alt: "Robotics & Aritifical Intelligence ETF",
    title: "Missing Image",
    subtitle: "MISS",
  },
};

export const MissingTitle: Story = {
  args: {
    src: "https://staging-assets.globalxetfs.com/icons/BOTZ.svg",
    alt: "Botz Logo",
    subtitle: "BOTZ",
  },
};

export const MissingSubtitle: Story = {
  args: {
    src: "https://staging-assets.globalxetfs.com/icons/BOTZ.svg",
    alt: "Botz Logo",
    title: "Robotics & Aritifical Intelligence ETF",
  },
};

export const MissingAltText: Story = {
  args: {
    src: "https://staging-assets.globalxetfs.com/icons/BOTZ.svg",
    title: "Robotics & Aritifical Intelligence ETF",
    subtitle: "BOTZ",
  },
};
