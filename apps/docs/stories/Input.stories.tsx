import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@global-x-etfs/gx-components";

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

export const PrimaryError: Story = {
  args: {
    variant: "primary",
    label: "Error",
    errorMessage: "This is an error",
    value: "not an email address",
    type: "email",
  },
};

export const CapitaliseText: Story = {
  args: {
    variant: "primary",
    label: "Capitalise Text Automatically",
    textTransform: "uppercase",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "Disabled",
    disabled: true,
  },
};
