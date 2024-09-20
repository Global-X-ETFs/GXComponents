import {
  CategoryCard,
  CategoryCardButton,
  CategoryCardDescription,
  CategoryCardSubtitle,
  CategoryCardTitle,
} from "@global-x-etfs/gx-components";
import type { Meta, StoryObj } from "@storybook/react";
import Car from "./assets/car.svg?react";

const meta = {
  title: "Components/CategoryCard",
  component: CategoryCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CategoryCardExample: Story = {
  args: {
    children: (
      <>
        <CategoryCardTitle>Thematic Growth ETFs</CategoryCardTitle>
        <CategoryCardSubtitle>Harness Disruption</CategoryCardSubtitle>
        <CategoryCardDescription>
          Investing in companies at the leading edge of long-term, structural
          shifts in the global economy. Solutions primarily target emerging
          technologies, changing consumer preferences, and green innovation.
        </CategoryCardDescription>
        <CategoryCardButton>Explore</CategoryCardButton>
      </>
    ),
    rhsImage: <Car />,
  },
};
