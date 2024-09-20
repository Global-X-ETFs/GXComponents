import { RadioGroup, RadioGroupItem } from "@global-x-etfs/gx-components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleRadioGroup: Story = {
  render: () => {
    return (
      <RadioGroup>
        <RadioGroupItem value="1" />
        <RadioGroupItem value="2" />
        <RadioGroupItem value="3" />
      </RadioGroup>
    );
  },
};
