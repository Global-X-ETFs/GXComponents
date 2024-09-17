import type { Meta, StoryObj } from "@storybook/react";
import {
  FundDetailsCard,
  FundDetailsCardContent,
  FundDetailsCardHeader,
  FundDetailsCardTitle,
  FundDetailsCardSubtitle,
  FundDetailsCardFooter,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/FundDetailsCard",
  component: FundDetailsCard,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleFundDetailsCard: Story = {
  render() {
    const title = "Fund Details";
    const subtitle = "As of 12/31/2020";

    return (
      <FundDetailsCard>
        <FundDetailsCardHeader>
          <FundDetailsCardTitle>{title}</FundDetailsCardTitle>
          <FundDetailsCardSubtitle>{subtitle}</FundDetailsCardSubtitle>
        </FundDetailsCardHeader>
        <FundDetailsCardContent>
          <div className="w-full h-96 bg-neutral-200 my-4 align-middle">
            <p className="text-3xl font-bold items-center h-full text-neutral-900">
              Content
            </p>
          </div>
        </FundDetailsCardContent>
        <FundDetailsCardFooter></FundDetailsCardFooter>
      </FundDetailsCard>
    );
  },
};
