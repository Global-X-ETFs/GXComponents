import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Checkbox id="terms">Accept terms and conditions</Checkbox>;
  },
};
