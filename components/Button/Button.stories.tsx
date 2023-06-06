import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Click Me",
    onClick: () => console.log("Clicked!"),
  },
};

Primary.play = async ({canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
};


export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Click Me",
    onClick: () => console.log("Clicked!"),
  },
};