import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";
import { Button } from "../Button";
import React from "react";
import { Card } from "../Card/Card";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicHoverCard: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger>Hover me</HoverCardTrigger>
      <HoverCardContent>Card content</HoverCardContent>
    </HoverCard>
  ),
};

export const ExampleHoverCard: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="text-white">AIQ</HoverCardTrigger>
      <HoverCardContent className="max-w-xl">
        <Card border={"top_accent"} className="flex flex-col  p-4">
          <p className="font-semibold">
            Global X ETFs Artificial Intelligence & Technology ETF
          </p>
          <p className="pt-4 text-neutral-100">
            Theme: Artificial Intelligence
          </p>

          <a href="https://globalxetfs.com/funds/aiq">
            <Button className="-ml-2">View</Button>
          </a>
        </Card>
      </HoverCardContent>
    </HoverCard>
  ),
};
