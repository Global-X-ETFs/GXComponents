import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    delayDuration: {
      control: { type: "range", min: 0, max: 1000, step: 50 },   
    }
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleTooltip: Story = {
  render: (args: { delayDuration?: number }) => (
    <TooltipProvider>
      <Tooltip delayDuration={args.delayDuration}>
        <TooltipTrigger asChild>
          <Button>Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};



