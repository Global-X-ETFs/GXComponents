import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@global-x-etfs/gx-components";
import type { Key } from "react";

const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleAccordion: Story = {
  render: function Render() {
    const data = [{
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
    }];
    
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full bg-neutral-50"
      >
        {data.map(
          (item: { trigger: string; content: string }, index: Key) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-bold py-4 px-2">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="font-proxima pl-1">{item.content}</AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    );
  },
};
