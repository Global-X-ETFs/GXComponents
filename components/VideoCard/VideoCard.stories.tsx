import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import {VideoCard} from "./VideoCard";


const meta = {
  title: "Components/VideoCard",
  component: VideoCard,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof VideoCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const BasicVideoCard: Story = {
    args: {
        title: "A Conversation About Personalized Medicine with Luba Greenwood",
        link: "https://www.youtube.com/watch?v=7Pq-S557XQU",
        imageSrc: "https://www.globalxetfs.com/content/files/230328-Lis-Personal_Medicine-copy.png",
        imageAlt: "A picture of Luba Greenwood"
    },
};

