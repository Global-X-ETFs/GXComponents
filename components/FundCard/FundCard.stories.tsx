import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import {FundCard} from "./FundCard";
import {FundCardHeader} from "./FundCardHeader";
import {FundCardTitle} from "./FundCardTitle";
import {FundCardSubTitle} from "./FundCardSubTitle";
import {FundCardImage} from "./FundCardImage";


const meta = {
  title: "Components/FundCard",
  component: FundCard,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof FundCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const EmptyCard: Story = {
  args: {
  },
};


export const TopAccentBorder: Story = {
    args: {
        border: "top_accent",
    },
};


export const FundTitle: Story = {
    args: {
        children: (
            <FundCardHeader>
                <FundCardTitle>
                    Robotics & Artificial Intelligence ETF
                </FundCardTitle>
            </FundCardHeader>
        ),
    },
};

export const Fund: Story = {
    args: {
        children: (
            <>
                <FundCardImage src="BotzLogo.svg" alt={"This is an image"} />
                <FundCardHeader>                    
                    <FundCardTitle>
                        Robotics & Artificial Intelligence ETF
                    </FundCardTitle>    
                    <FundCardSubTitle>
                        BOTZ
                    </FundCardSubTitle>                
                </FundCardHeader>
            </>
        ),
    },
};