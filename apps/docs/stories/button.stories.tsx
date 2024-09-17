import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@global-x-etfs/gx-components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      name: "Variant",
      description: "The type of button",
      defaultValue: "link",
      options: ["link", "transparent", "white", "footer", "marine", "badge"],
    },
    afterContent: {
      name: "After Content",
      description: "Adds content to the end of the Button",
    },
    children: {
      name: "Children",
      description: "The text of the button",
      type: "string",
      defaultValue: "Click Me",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Link: Story = {
  args: {
    variant: "link",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const LinkWithArrow: Story = {
  args: {
    variant: "link",
    afterContent: "arrow",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const LinkWithBack: Story = {
  args: {
    variant: "link",
    beforeContent: "arrowback",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const LinkWithArrowDown: Story = {
  args: {
    variant: "link",
    afterContent: "arrowdown",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const LinkWithArrowToMoveDown: Story = {
  args: {
    variant: "link",
    afterContent: "moveDown",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const LinkDisabled: Story = {
  args: {
    variant: "link",
    children: "Click Me",
    disabled: true,
  },
};

export const LinkWithBorderAndChevronRight: Story = {
  args: {
    variant: "border",
    afterContent: "chevronRight",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const LinkWithRoundedBorderAndChevronDown: Story = {
  args: {
    variant: "border",
    afterContent: "chevronDown",
    className: "rounded-md",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const Transparent: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "transparent",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const Full: Story = {
  parameters: {
    backgrounds: {
      default: "orange",
    },
  },
  args: {
    variant: "full",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const FullWithArrowDown: Story = {
  parameters: {
    backgrounds: {
      default: "orange",
    },
  },
  args: {
    variant: "full",
    afterContent: "arrowdownwhite",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};


export const White: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "white",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const WhiteWithArrow: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "white",
    afterContent: "arrow",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const Footer: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "footer",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const FooterWithArrow: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "footer",
    afterContent: "arrow",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const DimWithUpArrow: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "dim",
    beforeContent: "arrowup",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const Marine: Story = {
  args: {
    variant: "marine",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const BadgeWhite: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "badge-white",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const BadgeMarine: Story = {
  args: {
    variant: "badge-marine",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const BadgeOrange: Story = {
  args: {
    variant: "badge-orange",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const BadgeOrangeFull: Story = {
  args: {
    variant: "badge-orange-full",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const FundTab: Story = {
  args: {
    variant: "fund-tab",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};

export const InvestTab: Story = {
  args: {
    variant: "invest-tab",
    children: "Click Me",

    onClick: () => {
      console.log("Clicked!");
    },
  },
};
