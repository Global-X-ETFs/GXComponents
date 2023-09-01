import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { PrintHero } from "./PrintHero";

const meta = {
  title: "Components/PrintHero",
  component: PrintHero,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PrintHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlankPrintHero: Story = {
  args: {
    children: "Hello World",
    title: "Thematic Exposure",
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    imageURL: "/logo.png",
  },
};
