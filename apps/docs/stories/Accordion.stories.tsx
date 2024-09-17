import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@global-x-etfs/gx-components";
import { useArgs } from "@storybook/preview-api";
import type { Key } from "react";

const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleAccordion: Story = {
  args: {
    data: [
      {
        trigger: "Is it accessible?",
        content: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
      {
        trigger: "Is it styled?",
        content:
          "Yes. It comes with default styles that matches the other components' aesthetic.",
      },
      {
        trigger: "Is it animated?",
        content:
          "Yes. Its animated by default, but you can disable it if you prefer.",
      },
    ],
  },
  render: function Render(args: {
    data: { trigger: string; content: string }[];
  }) {
    const [_, updateArgs] = useArgs();

    return (
      <Accordion
        type="single"
        collapsible
        className="w-full bg-neutral-50"
        onChange={(event) => {
          updateArgs({ data: event });
        }}
      >
        {args.data.map(
          (item: { trigger: string; content: string }, index: Key) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    );
  },
};
