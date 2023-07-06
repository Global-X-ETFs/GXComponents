import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlankCard: Story = {
  args: {
    children: "Hello World",
    border: "top_accent",
  },
};
