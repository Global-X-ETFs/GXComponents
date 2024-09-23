import {
  CategoryCard,
  CategoryCardButton,
  CategoryCardDescription,
  CategoryCardSubtitle,
  CategoryCardTitle,
} from "@global-x-etfs/gx-components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/CategoryCard",
  component: CategoryCard,
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const CategoryCardExample: Story = {
  render: function Render() {
    return (
      <CategoryCard>
        <CategoryCardTitle>Thematic Growth ETFs</CategoryCardTitle>
        <CategoryCardSubtitle>Harness Disruption</CategoryCardSubtitle>
        <CategoryCardDescription>
          Investing in companies at the leading edge of long-term, structural
          shifts in the global economy. Solutions primarily target emerging
          technologies, changing consumer preferences, and green innovation.
        </CategoryCardDescription>
        <CategoryCardButton>Explore</CategoryCardButton>
      </CategoryCard>
    );
  },
};
