import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const PrimaryEmail: Story = {
  args: {
    variant: "primary",
    type: "email",
    label: "Email",
    promptMessage: "What is your email address?",
    errorMessage: "Must be in the format of name@domain.com",
    required: true,
  },
};

export const PrimaryHint: Story = {
  args: {
    variant: "primary",
    label: "Hint",
    hintMessage: "This is a hint",
  },
};
