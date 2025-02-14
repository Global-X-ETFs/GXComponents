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
    <div className="bg-marine p-10 w-80">
      <Stat className="md:w-full">
        <StatTitle title="200" after="+" />
        <StatDescription description="Diverse team of more than 200 financial professionals" />
        <StatSubtitle subtitle="(As of March, 2024) "></StatSubtitle>
      </Stat>
    </div>
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
        <div className="flex md:justify-between md:flex-row flex-col text-center max-w-5xl [&_p]:mx-auto">          
          <Stat className="px-11">
            <StatTitle
              after="+"
              className="lg:text-11xl [&>sub]:relative [&>sub]:-top-5 lg:[&>sub]:-top-8"
              sup=""
              title="200"
            />
            <StatDescription className="max-w-64" description="Diverse team of more than 200 financial professionals" />
          </Stat>
          <Stat className="px-11">
            <StatTitle
              after="bn"
              className="lg:text-11xl [&>sub]:relative [&>sub]:-top-5 lg:[&>sub]:-top-8"
              sup="˜$"
              title="93"
            />
            <StatDescription className="max-w-64" description="of AUM in Global X ETFs listed worldwide" />
            <StatSubtitle subtitle="(as of December 2023)" />
          </Stat>
          <Stat className="px-11">
            <StatTitle
              after=""
              className="lg:text-11xl [&>sub]:relative [&>sub]:-top-5 lg:[&>sub]:-top-8"
              sup=""
              title="1"
            />
            <StatDescription className="max-w-64" description="one team, one shared mission" />
          </Stat>
        </div>
      </div>
    </div>
  ),
};
