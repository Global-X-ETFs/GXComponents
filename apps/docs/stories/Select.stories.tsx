import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectValue,
  SelectGroupLabel,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleSelect: Story = {
  render: () => (
    <Select>
      <SelectLabel>Theme</SelectLabel>
      <SelectTrigger className="w-1/2">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const ExampleSelectWithGroups: Story = {
  render: () => (
    <Select>
      <SelectLabel>Pets</SelectLabel>
      <SelectTrigger className="w-1/2">
        <SelectValue placeholder="Pets" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Dogs</SelectGroupLabel>
          <SelectItem value="john">John</SelectItem>
          <SelectItem value="steve">Steve</SelectItem>
          <SelectItem value="nigel">Nigel</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Cats</SelectGroupLabel>
          <SelectItem value="alan">Alan</SelectItem>
          <SelectItem value="brian">Brian</SelectItem>
          <SelectItem value="tom">Tom</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const ExampleSelectRounded: Story = {
  render: () => (
    <Select>
      <SelectLabel variant="rounded">Theme</SelectLabel>
      <SelectTrigger variant="rounded" className="w-1/2">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent variant="rounded">
        <SelectItem variant="rounded" value="light">Light</SelectItem>
        <SelectItem variant="rounded" value="dark">Dark</SelectItem>
        <SelectItem variant="rounded" value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
};
