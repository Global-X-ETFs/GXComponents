import type { Meta, StoryObj } from "@storybook/react";
import { PrintHero } from "@global-x-etfs/gx-components";

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
    imageURL: "https://staging-assets.globalxetfs.com/logo/GlobalX.svg",
    backgroundImageURL:
      "https://staging-assets.globalxetfs.com/images/CompassRose_Blue.svg",
      className: "py-4",
  },
};

export const PrintHeroWithOutBackgroundImage: Story = {
  args: {
    title: "Thematic Exposure",
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    imageURL: "https://staging-assets.globalxetfs.com/logo/GlobalX.svg",
    backgroundColour: "darkblue",
    className: "py-4",
  },
};

export const PrintHeroWithOutRHS: Story = {
  args: {
    title: "Thematic Exposure",
    imageURL: "https://staging-assets.globalxetfs.com/logo/GlobalX.svg",
    backgroundImageURL:
      "https://staging-assets.globalxetfs.com/images/CompassRose_Blue.svg",
      className: "py-4",
  },
};

export const PrintHeroWithOutImage: Story = {
  args: {
    title: "Thematic Exposure",
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    imageURL: "https://staging-assets.globalxetfs.com/logo/GlobalX.svg",
    backgroundImageURL:
      "https://staging-assets.globalxetfs.com/images/CompassRose_Blue.svg",
      className: "py-4",
  },
};

export const PrintHeroWithOutRHSAndImage: Story = {
  args: {
    title: "Thematic Exposure",
    imageURL: "https://staging-assets.globalxetfs.com/logo/GlobalX.svg",
    backgroundImageURL:
      "https://staging-assets.globalxetfs.com/images/CompassRose_Blue.svg",
      className: "py-4",
  },
};

export const PrintHeroWithOutTitle: Story = {
  args: {
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    imageURL: "https://staging-assets.globalxetfs.com/logo/GlobalX.svg",
    backgroundImageURL:
      "https://staging-assets.globalxetfs.com/images/CompassRose_Blue.svg",
      className: "py-4",
  },
};

export const PrintHeroWithTransparentBackground: Story = {
  args: {
    title: "Thematic Exposure",
    rhs: {
      title: "Q2 2023 Overlap Analysis",
      subtitle: "Source: Global X ETFs and Bloomberg as of 6/30/2023",
    },
    imageURL: "https://staging-assets.globalxetfs.com/logo/GlobalX.svg",
    backgroundColour: "transparent",
    className: "py-4",
  },
};
