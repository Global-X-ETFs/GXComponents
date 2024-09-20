import type { Meta, StoryObj } from "@storybook/react";
import { UtilHeader, UtilHeaderItem } from "@global-x-etfs/gx-components";
import PinIcon from "./assets/pin.svg?react";
import EmailIcon from "./assets/email.svg?react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/UtilHeader",
  component: UtilHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof UtilHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    left: [
      <UtilHeaderItem
        key={0}
        position={"left"}
        icon={<PinIcon />}
        isVisibleMobile
      >
        United States
      </UtilHeaderItem>,
    ],
    right: [
      <UtilHeaderItem key={0} position={"right"}>
        Model Portfolios
      </UtilHeaderItem>,
      <UtilHeaderItem key={1} position={"right"}>
        Institutional
      </UtilHeaderItem>,
      <UtilHeaderItem key={2} position={"right"}>
        News
      </UtilHeaderItem>,
      <UtilHeaderItem
        key={3}
        position={"right"}
        icon={<EmailIcon />}
        isVisibleMobile
      >
        Contact
      </UtilHeaderItem>,
    ],
  },
};
