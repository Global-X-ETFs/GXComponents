import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  List,
  ListItem,
} from "@global-x-etfs/gx-components";
import Pdf from "./assets/Pdf.svg?react";

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

export const ListItemWithIconExample: Story = {
  render: () => (
    <ListItem variant="documents" icon={<Pdf />} title="Fact Sheet" />
  ),
};

export const DocumentExample: Story = {
  render: () => (
    <div className="bg-neutral-600 py-8 p-4 w-96">
      <h3 className="text-3xl mb-8">Fund Documents</h3>
      <List variant="documents">
        <ListItem variant="documents" icon={<Pdf />} title="Fact Sheet" />
        <ListItem variant="documents" icon={<Pdf />} title="Prospectus" />
        <ListItem
          variant="documents"
          icon={<Pdf />}
          title="Index Methodology Overview"
        />
        <ListItem
          variant="documents"
          icon={<Pdf />}
          title="Supplementary Prospectus"
        />
        <ListItem
          variant="documents"
          icon={<Pdf />}
          title="Key Investor Information Document(s)"
        />
        <ListItem variant="documents" icon={<Pdf />} title="Dealing Calendar" />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="expand">
            <AccordionTrigger triggerStyle="leftAligned" chevronStyle="leftAligned">Additional Documents</AccordionTrigger>
            <AccordionContent>
              <List variant="documents">
                <ListItem
                  variant="documentssmall"
                  icon={<Pdf />}
                  title="Annual Report"
                /> 
                <ListItem
                  variant="documentssmall"
                  icon={<Pdf />}
                  title="Semi-Annual Report"
                />
                <ListItem
                  variant="documentssmall"
                  icon={<Pdf />}
                  title="Shareholder Letter"
                />
                <ListItem
                  variant="documentssmall"
                  icon={<Pdf />}
                  title="Proxy Voting"
                />
                <ListItem
                  variant="documentssmall"
                  icon={<Pdf />}
                  title="Proxy Voting"
                />
              </List>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </List>
    </div>
  ),
};
