import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { Card } from "../Card/Card";

import { TabGroup, TabsContent, TabsList, TabsTrigger } from "./TabGroup";

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
