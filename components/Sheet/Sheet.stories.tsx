import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";

const meta: Meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
