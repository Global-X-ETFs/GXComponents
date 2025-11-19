import type { Meta, StoryObj } from "@storybook/react";
import { ImageZoom } from "@global-x-etfs/gx-components";

const meta = {
  title: "Components/ImageZoom",
  component: ImageZoom,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ImageZoom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageZoomStory: Story = {
  args: {
    children: (
      <img
        alt="Placeholder image"
        className="h-auto w-96"
        height={800}
        src="https://placehold.co/1200x800"
        width={1200}
      />
    ),
  },
};
