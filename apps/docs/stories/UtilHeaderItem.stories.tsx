import type { Meta, StoryObj } from "@storybook/react";
import { UtilHeaderItem } from "@global-x-etfs/gx-components";
import ContactIcon from "./assets/contact.svg?react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/UtilHeader/UtilHeaderItem",
  component: UtilHeaderItem,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof UtilHeaderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Institutional",
  },
};

export const WithIconLeft: Story = {
  args: {
    children: "Contact",
    icon: <ContactIcon />,
    position: "left",
  },
};

export const WithoutIconLeft: Story = {
  args: {
    children: "Contact",
    position: "left",
  },
};

export const WithIconRight: Story = {
  args: {
    children: "Contact",
    icon: <ContactIcon />,
    position: "right",
  },
};

export const WitoutIconRight: Story = {
  args: {
    children: "Contact",
    position: "right",
  },
};

export const MultipleIcons: Story = {
  render: () => (
    <div className="flex">
      <UtilHeaderItem position={"right"}>Model Portfolios</UtilHeaderItem>
      <UtilHeaderItem position={"right"}>Institutional</UtilHeaderItem>
      <UtilHeaderItem position={"right"}>News</UtilHeaderItem>
      <UtilHeaderItem position={"right"} icon={<ContactIcon />} isVisibleMobile>
        Contact
      </UtilHeaderItem>
    </div>
  ),
};
