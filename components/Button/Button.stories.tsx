import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      name: "Variant",
      description: "The type of button",
      defaultValue: "link",
      options: ["link", "transparent"],
    },
    afterContent: {
      name: "After Content",
      description: "Adds content to the end of the Button",
    },
    children: {
      name: "Children",
      description: "The text of the button",
      type: "string",
      defaultValue: "Click Me",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Link: Story = {
  args: {
    variant: "link",
    children: "Click Me",
    // eslint-disable-next-line no-console
    onClick: () => console.log("Clicked!"),
  },
};

export const LinkWithArrow: Story = {
  args: {
    variant: "link",
    afterContent: "arrow",
    children: "Click Me",
    // eslint-disable-next-line no-console
    onClick: () => console.log("Clicked!"),
  },
};

export const Transparent: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "transparent",
    children: "Click Me",
    // eslint-disable-next-line no-console
    onClick: () => console.log("Clicked!"),
  },
};

export const LinkDisabled: Story = {
  args: {
    variant: "link",
    children: "Click Me",
    disabled: true,
  },
};
