import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { PrintHero } from "./PrintHero";

const meta = {
  title: "Components/PrintHero",
  component: PrintHero,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PrintHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExamplePrintHero: Story = {
  args: {
    children: "Hello World",
    title: "Thematic Exposure",
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    imageURL: "/logo.png",
    backgroundImageURL: "/CompassRose-Blue.svg",
  },
};

export const PrintHeroWithOutBackgroundImage: Story = {
  args: {
    title: "Thematic Exposure",
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    imageURL: "/logo.png",
  },
};

export const PrintHeroWithOutRHS: Story = {
  args: {
    title: "Thematic Exposure",
    imageURL: "/logo.png",
    backgroundImageURL: "/CompassRose-Blue.svg",
  },
};

export const PrintHeroWithOutImage: Story = {
  args: {
    title: "Thematic Exposure",
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    backgroundImageURL: "/CompassRose-Blue.svg",
  },
};

export const PrintHeroWithOutRHSAndImage: Story = {
  args: {
    title: "Thematic Exposure",
    backgroundImageURL: "/CompassRose-Blue.svg",
  },
};

export const PrintHeroWithOutTitle: Story = {
  args: {
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    imageURL: "/logo.png",
    backgroundImageURL: "/CompassRose-Blue.svg",
  },
};

export const PrintHeroWithTransparentBackground: Story = {
  args: {
    title: "Thematic Exposure",
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    imageURL: "/logo.png",
    backgroundColour: "transparent",
  },
};
