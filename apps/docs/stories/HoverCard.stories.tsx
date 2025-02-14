import type { Meta, StoryObj } from "@storybook/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
  Card,
} from "@global-x-etfs/gx-components";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleHoverCard: Story = {
  render: () => (
    <div className="flex mb-40">
      <HoverCard>
        <HoverCardTrigger className="cursor-pointer ">
          <Button>AIQ</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <Card border="top_accent" className="flex flex-col p-4">
            <p className="pb-2 text-lg font-semibold text-black">
              Global X Artificial Intelligence & Technology ETF
            </p>
            <p className="text-black">
              Theme:{" "}
              <span className="font-semibold text-neutral-100">Big Data</span>
            </p>

            <p className="text-black">
              Category:{" "}
              <span className="font-semibold text-neutral-100">
                Disruptive Technology
              </span>
            </p>
            <a href={`https://globalxetfs.com/fund/AIQ`} className="mt-4">
              <Button afterContent="arrow">
                View More
              </Button>
            </a>
          </Card>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};
