import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "../Button";
import React from "react";
import { Card } from "../Card/Card";

const meta: Meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: {
        type: "select",
        options: ["center", "start", "end"],
      },
    },
    sideOffset: {
      control: {
        type: "number",
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExamplePopover: Story = {
  render: () => (
    <div className="flex">
      <Popover>
        <PopoverTrigger>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Card border="top_accent">Place content for the popover here.</Card>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
