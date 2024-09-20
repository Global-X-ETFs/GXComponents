import type { Meta, StoryObj } from "@storybook/react";
import { Highlight, Input } from "@global-x-etfs/gx-components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Highlight",
  component: Highlight,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    trigger: "change this in the controls to trigger the highlight",
    duration: 1000,
    className: "",
    children: (
      <Input
        className="group-data-[highlight=on]:bg-green-300 group-data-[highlight=on]:duration-1500 transition "
        placeholder="Change the trigger in the controls to see this get highlighted"
      />
    ),
  },
};
