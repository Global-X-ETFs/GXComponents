import { RadioGroup, RadioGroupItem, RadioGroupLabel } from "@global-x-etfs/gx-components";
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
        <RadioGroup id="value1" name="type">
          <RadioGroupItem value="value1" />
          <RadioGroupLabel htmlFor="value1">
            Option 1
          </RadioGroupLabel>
          <RadioGroupItem value="value2" />
          <RadioGroupLabel htmlFor="value2">
            Option 2
          </RadioGroupLabel>
        </RadioGroup>
    );
  },
};
