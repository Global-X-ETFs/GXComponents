import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card } from "@global-x-etfs/gx-components";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    border: {
      control: { type: "select" },
      options: ["none", "top_accent"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlankCard: Story = {
  args: {
    children: "Hello World",
    border: "top_accent",
  },
};

export const CardWithContent: Story = {
  args: {
    children: (
      <div className="w-[400px]">
        <h1 className="text-3xl font-bold mb-2">Hello World</h1>
        <p className="text-base">This is a card with some content</p>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipis, adipisicing elit.
          Quisquam, voluptatum. Blah blah blahh, random words...
        </p>
        <Button className="p-0 mt-4">Click Me</Button>
      </div>
    ),
    border: "top_accent",
    className: "flex flex-col shadow-xl",
  },
};

export const BroadcastAppearancesCard: Story = {
  render: () => {
    return (
      <Card border="top_accent" className="flex flex-col gap-4 shadow-xl w-[400px]">
        <img
          src="https://www.globalxetfs.com/content/files/Rohan-News.jpg"
          alt="Rohan News"
        />
        <p className="text-granite text-ml font-light">7/7/2023</p>
        <h3 className="text-xl text-marine">
          Remain Wary Of Oil Demand In 2024 (Ameritrade Network) | Director of
          Research Rohan Reddy
        </h3>
      </Card>
    );
  },
};


export const ResourcesCard: Story = {
  render: () => {
    return (
      <Card className="flex flex-col mx-auto shadow-xl rounded-xl">
        <div className="mx-auto mb-6">
          <img
            src="https://cms-stage-cdn.globalxetfs.com/ar-options-strategies.svg"
            alt="Resources"
            width={150}
            height={150}
          />
        </div>
        <h3 className="font-bold text-2xl text-marine mb-6">
          Monthly Covered Call Commentary
        </h3>
        <Button
          afterContent="arrow"
          variant="link"
          className="text-left"
        >
          Read More
        </Button>
      </Card>
    );
  },
};
