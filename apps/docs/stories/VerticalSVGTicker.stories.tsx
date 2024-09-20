import { VerticalSVGTicker } from "@global-x-etfs/gx-components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VerticalSVGTicker> = {
  title: "Components/VerticalSVGTicker",
  component: VerticalSVGTicker,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const VerticalSVGTickerExample: Story = {
  render: () => {
    const iconsURL = [
      "https://cms-stage-cdn.globalxetfs.com/car-test.svg",
      "https://cms-stage-cdn.globalxetfs.com/AI-test.svg",
      "https://cms-stage-cdn.globalxetfs.com/building-test.svg",
      "https://cms-stage-cdn.globalxetfs.com/react-test.svg",
    ];

    return (
      <VerticalSVGTicker
        duration={4000}
        iconsURL={iconsURL}
      ></VerticalSVGTicker>
    );
  },
};
