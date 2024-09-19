import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/List",
  component: ListItem,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ListItem>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ListItemDefaultExample: Story = {
  render: () => (
    <ListItem
      date="18th November 2021"
      title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
    />
  ),
};

export const ListWithMultipleItemsExample: Story = {
  render: () => (
    <List>
      <ListItem
        date="18th November 2021"
        title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
      />
      <ListItem
        date="18th November 2021"
        title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
      />
      <ListItem
        date="18th November 2021"
        title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
      />
      <ListItem
        date="18th November 2021"
        title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
      />
    </List>
  ),
};

export const ListItemWithArrowAfterExample: Story = {
  render: () => (
    <ListItem
      afterContent="arrow"
      date="18th November 2021"
      title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
    />
  ),
};

export const ListItemCompactExample: Story = {
  render: () => (
    <ListItem
      variant="compact"
      date="18th November 2021"
      title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
    />
  ),
};

export const ListCompactMultipleItemsExample: Story = {
  render: () => (
    <List>
      <ListItem
        variant="compact"
        date="18th November 2021"
        title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
      />
      <ListItem
        variant="compact"
        date="18th November 2021"
        title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
      />
      <ListItem
        variant="compact"
        date="18th November 2021"
        title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
      />
      <ListItem
        variant="compact"
        date="18th November 2021"
        title="Experts: November Jobs Report Tempers Fed-Cut Expectations"
      />
    </List>
  ),
};
