import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@global-x-etfs/gx-components";
import type { Key } from "react";
import { useState } from "react";

const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const BasicAccordion: Story = {
  render: function Render() {
    const data = [
      {
        trigger: "Lorem ipsum dolor sit amet",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        trigger: "Ut enim ad minim veniam",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        trigger: "Duis aute irure dolor in reprehenderit",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ];

    return (
      <Accordion type="single" collapsible className="w-full bg-neutral-50">
        {data.map((item: { trigger: string; content: string }, index: Key) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg font-bold py-4 px-2">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="font-proxima pl-1">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
};

export const FilterAccordion: Story = {
  render: function Render() {
    const [selectedFilter, setSelectedFilter] = useState({
      theme: "All",
      count: 28,
    });

    const etfData = [
      { theme: "All", count: 28 },
      { theme: "Technology", count: 12 },
      { theme: "Healthcare", count: 8 },
      { theme: "Technology", count: 5 },
      { theme: "Healthcare", count: 3 },
    ];

    return (
      <Accordion className="mb-4 px-2" collapsible type="single">
        <AccordionItem value="_">
          <div className="inline-flex items-baseline text-marine font-proxima text-md font-bold pl-1 gap-2" >
            Filter:
            <AccordionTrigger
              chevronStyle="large"
              className="font-bold text-xl font-proximatight ml-4 capitalize"
            >
              {selectedFilter.theme} ({selectedFilter.count})
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <div className="gap-2 w-full flex flex-wrap">
              {etfData.map((item) => (
                <Button
                  className="capitalize"
                  key={item.theme}
                  onClick={() => {
                    setSelectedFilter(item);
                  }}
                  variant="badge-neutral-600-full"
                >
                  {item.theme} ({item.count})
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};
