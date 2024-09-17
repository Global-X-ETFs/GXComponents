import type { Meta, StoryObj } from "@storybook/react";
import {
  InformationCard,
  InformationCardContent,
  InformationCardHeader,
  InformationCardTitle,
  InformationCardSubtitle,
  InformationCardRow,
  InformationCardName,
  InformationCardValue,
  InformationCardTextBox,
  InformationCardFooter,
  InformationCardToolTip,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/InformationCard",
  component: InformationCard,
  tags: ["autodocs"],
  argTypes: {
    delayDuration: {
      control: { type: "range", min: 0, max: 1000, step: 50 },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleInformationCard: Story = {
  render(args: { delayDuration?: number }) {
    const title = "Fund Details";
    const subtitle = "As of 12/31/2020";
    const rows = [
      {
        name: "Name",
        value: "Value",
      },
      {
        name: "Name",
        value: "Value",
      },
      {
        name: "Name",
        value: "Value",
      },
    ];
    const content =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const footer = "Footer";

    return (
      <InformationCard>
        <InformationCardHeader>
          <InformationCardTitle>{title}</InformationCardTitle>
          <InformationCardSubtitle>{subtitle}</InformationCardSubtitle>
        </InformationCardHeader>
        <InformationCardContent>
          {rows.map((row, index) => (
            <InformationCardRow key={index}>
              <InformationCardName>
                {row.name}{" "}
                <InformationCardToolTip delayDuration={args.delayDuration}>
                  A standard yield calculation developed by the Securities and
                  Exchange Commission that allows for fairer comparisons among
                  bond funds. It is based on the most recent month end. This
                  figure reflects the interest earned during the period after
                  deducting the fund’s expenses for the period.
                </InformationCardToolTip>
              </InformationCardName>
              <InformationCardValue>{row.value}</InformationCardValue>
            </InformationCardRow>
          ))}
          <InformationCardTextBox>{content}</InformationCardTextBox>
        </InformationCardContent>
        <InformationCardFooter>{footer}</InformationCardFooter>
      </InformationCard>
    );
  },
};

export const InformationCardTooltip: Story = {
  render: (args: { delayDuration?: number }) => (
    <InformationCard>
      <InformationCardHeader>
        <InformationCardTitle>Distributions</InformationCardTitle>
        <InformationCardSubtitle>As of 19th Jul 2024</InformationCardSubtitle>
      </InformationCardHeader>
      <InformationCardContent>
        <InformationCardRow>
          <InformationCardName>
            30-Day SEC Yield
            <InformationCardToolTip delayDuration={args.delayDuration}>
              A standard yield calculation developed by the Securities and
              Exchange Commission that allows for fairer comparisons among bond
              funds. It is based on the most recent month end. This figure
              reflects the interest earned during the period after deducting the
              fund’s expenses for the period.
            </InformationCardToolTip>
          </InformationCardName>
          <InformationCardValue>2.40%</InformationCardValue>
        </InformationCardRow>

        <InformationCardRow>
          <InformationCardName>
            Unsubsidized 30-Day SEC Yield
            <InformationCardToolTip delayDuration={args.delayDuration}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc,
              nec ultricies nunc nisl nec nunc. Nullam auctor, nunc nec
              ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc
              nisl nec nunc.
            </InformationCardToolTip>
          </InformationCardName>
          <InformationCardValue>1.40%</InformationCardValue>
        </InformationCardRow>
        <InformationCardRow>
          <InformationCardName>Current Speed</InformationCardName>
          <InformationCardValue>{args.delayDuration}ms</InformationCardValue>
        </InformationCardRow>
      </InformationCardContent>
    </InformationCard>
  ),
};
