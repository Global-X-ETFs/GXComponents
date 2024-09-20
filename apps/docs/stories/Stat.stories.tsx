import type { Meta, StoryObj } from "@storybook/react";
import {
  Stat,
  StatDescription,
  StatSubtitle,
  StatTitle,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/Stat",
  component: Stat,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const BasicStat: Story = {
  render: () => (
    <Stat>
      <StatTitle title="200" after="+" />
      <StatDescription description="Diverse team of more than 200 financial professionals" />
      <StatSubtitle subtitle="(As of March, 2024) "></StatSubtitle>
    </Stat>
  ),
};

export const ExampleStats: Story = {
  render: () => (
    <div className="w-full mx-auto bg-marine pb-40 md:pb-96 px-10">
      <div className="py-20 mx-auto max-w-4xl">
        <h2 className="text-orange text-4xl mx-auto text-center">
          HEADQUARTERED IN NEW YORK
        </h2>
        <h3 className="text-white text-xl font-normal font-proxima mx-auto text-center py-12">
          With a global footprint spanning Europe, Asia, and Latin America
        </h3>
        <div className="flex items-center md:justify-around md:flex-row flex-col ">
          <Stat>
            <StatTitle title="200" after="+" />
            <StatDescription description="Diverse team of more than 200 financial professionals" />
          </Stat>
          <Stat>
            <StatTitle title="$51bn" sup="~" />
            <StatDescription description="of AUM in Global X ETFs listed worldwide" />
            <StatSubtitle subtitle="(as of December 2023)" />
          </Stat>
          <Stat>
            <StatTitle title="1" />
            <StatDescription description="one team, one shared mission" />
          </Stat>
        </div>
      </div>
    </div>
  ),
};
