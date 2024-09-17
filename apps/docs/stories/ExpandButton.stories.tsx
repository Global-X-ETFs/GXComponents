import type { Meta, StoryObj } from "@storybook/react";
import {
  ExpandButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/ExpandButton",
  component: ExpandButton,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ExpandButton>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ExpandButtonDefaultExample: Story = {
  render: () => {
    const expanded = false;
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>John Smith</TableCell>
              <TableCell>40</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <ExpandButton expanded={expanded}>Show More</ExpandButton>
      </div>
    );
  },
};
