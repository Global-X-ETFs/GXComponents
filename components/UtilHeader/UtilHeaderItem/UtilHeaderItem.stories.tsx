


import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import UtilHeaderItem from "./UtilHeaderItem"
import { __ContactSVG } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
    title: "Components/UtilHeader/UtilHeaderItem",
    component: UtilHeaderItem,
    tags: ['autodocs'],
    argTypes: {
    }
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
        icon: __ContactSVG(),
        position: "left",
    }
}

export const WithIconRight: Story = {
    args: {
        children: "Contact",
        icon: __ContactSVG(),
        position: "right",
    }
}

export const MultipleIcons: Story = {
    render: () => (
        <div className="flex">
            <UtilHeaderItem position={"right"}>Model Portfolios</UtilHeaderItem>
            <UtilHeaderItem position={"right"}>Institutional</UtilHeaderItem>
            <UtilHeaderItem position={"right"}>News</UtilHeaderItem>
            <UtilHeaderItem position={"right"} icon={<__ContactSVG />} isVisibleMobile>Contact</UtilHeaderItem> 
        </div>
    )
}
