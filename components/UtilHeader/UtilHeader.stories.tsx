
import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import UtilHeader from "./UtilHeader";
import UtilHeaderItem from "./UtilHeaderItem/UtilHeaderItem";
import { __ContactSVG, __PinSVG } from "../utils";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
    title: "Components/UtilHeader",
    component: UtilHeader,
    tags: ['autodocs'],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
    }
} satisfies Meta<typeof UtilHeader>;


export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        left: [
            <UtilHeaderItem position={"left"} icon={<__PinSVG />} isVisibleMobile>United States</UtilHeaderItem>,
        ],
        right: [
            <UtilHeaderItem position={"right"}>Model Portfolios</UtilHeaderItem>,
            <UtilHeaderItem position={"right"}>Institutional</UtilHeaderItem>,
            <UtilHeaderItem position={"right"}>News</UtilHeaderItem>,
            <UtilHeaderItem position={"right"} icon={<__ContactSVG />} isVisibleMobile>Contact</UtilHeaderItem>            
        ],
    },
};
