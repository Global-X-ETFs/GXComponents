import type { Meta, StoryObj } from "@storybook/react";
import {
  TabGroup,
  TabsContent,
  TabsList,
  TabsTrigger,
  Card,
} from "@global-x-etfs/gx-components";

const meta = {
  title: "Components/TabGroup",
  component: TabGroup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleTabGroup: Story = {
  render: () => (
    <TabGroup defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card border={"top_accent"}>Account stuff</Card>
      </TabsContent>
      <TabsContent value="password">
        <Card border={"top_accent"}>Password stuff</Card>
      </TabsContent>
    </TabGroup>
  ),
};

export const ExampleSimpleGroup: Story = {
  render: () => (
    <TabGroup defaultValue="account">
      <TabsList tabListStyle="simple">
        <TabsTrigger tabTriggerStyle="simple" value="account">Account</TabsTrigger>
        <TabsTrigger tabTriggerStyle="simple" value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card border={"top_accent"}>Account stuff</Card>
      </TabsContent>
      <TabsContent value="password">
        <Card border={"top_accent"}>Password stuff</Card>
      </TabsContent>
    </TabGroup>
  ),
};

export const ExampleCorpTabGroup: Story = {
  render: () => (
    <Card className="w-full">
      <TabGroup defaultValue="thematic" tabGroupStyle="corp">
        <TabsList tabListStyle="corp" className="gap-4">
          <TabsTrigger tabTriggerStyle="corp" value="thematic">
            Thematic
          </TabsTrigger>
          <TabsTrigger tabTriggerStyle="corp" value="income">
            Income
          </TabsTrigger>
          <TabsTrigger tabTriggerStyle="corp" value="commodities">
            Commodities
          </TabsTrigger>
        </TabsList>
        <TabsContent value="thematic">
          <Card>Thematic</Card>
        </TabsContent>
        <TabsContent value="income">
          <Card>Password stuff</Card>
        </TabsContent>
        <TabsContent value="commodities">
          <Card>Commodities stuff</Card>
        </TabsContent>
      </TabGroup>
    </Card>
  ),
};

export const TabGroupWithNoDefault: Story = {
  render: () => (
    <TabGroup>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card border={"top_accent"}>Account stuff</Card>
      </TabsContent>
      <TabsContent value="password">
        <Card border={"top_accent"}>Password stuff</Card>
      </TabsContent>
    </TabGroup>
  ),
};

export const TabGroupWithMultipleTabs: Story = {
  render: () => (
    <TabGroup defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="Settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card border={"top_accent"}>Account stuff</Card>
      </TabsContent>
      <TabsContent value="password">
        <Card border={"top_accent"}>Password stuff</Card>
      </TabsContent>
      <TabsContent value="Settings">
        <Card border={"top_accent"}>Settings stuff</Card>
      </TabsContent>
    </TabGroup>
  ),
};
