import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { UtilHeader } from "./UtilHeader";
import { UtilHeaderItem } from "./UtilHeaderItem";
import { __ContactSVG, __PinSVG } from "../utils";

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
        icon={<__PinSVG />}
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
        icon={<__ContactSVG />}
        isVisibleMobile
      >
        Contact
      </UtilHeaderItem>,
    ],
  },
};