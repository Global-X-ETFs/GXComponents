import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Card,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    align: {
      options: ["center", "start", "end"],
      control: {
        type: "select",
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
  args: {
    align: "center",
    sideOffset: 0,
  },
  render: function Render(args: { align: string; sideOffset: number }) {
    return (
      <div className="flex">
        <Popover>
          <PopoverTrigger>
            <Button>Open</Button>
          </PopoverTrigger>
          <PopoverContent align={args.align} sideOffset={args.sideOffset}>
            <Card border="top_accent">Place content for the popover here.</Card>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};
