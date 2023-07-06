import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { LoadingSpinner } from "./LoadingSpinner";

const meta = {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicLoadingSpinner: Story = {
  args: {},
};

export const DarkLoadingSpinner: Story = {
  args: {
    colour: "black",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const OrangeLoadingSpinner: Story = {
  args: {
    colour: "orange",
  },
};

export const MarineLoadingSpinner: Story = {
  args: {
    colour: "marine",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const EarthLoadingSpinner: Story = {
  args: {
    colour: "earth",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const WhiteLoadingSpinner: Story = {
  args: {
    colour: "white",
  },
};
