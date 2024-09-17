import type { Meta, StoryObj } from "@storybook/react";
import { VideoCard } from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/VideoCard",
  component: VideoCard,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleVideoCard: Story = {
  render: () => (
    <VideoCard
      title="Digital Economy: Using a Thematic Investing Strategy"
      coverImageURL="https://globalxetfs.eu/content/files/230328-Morgane_Digital-Economy.png"
    ></VideoCard>
  ),
};
