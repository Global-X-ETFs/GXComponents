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
      <div className="w-72 sm:w-[500px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Period</TableHead>
              <TableHead>Fund NAV</TableHead>
              <TableHead>Market Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1 Month</TableCell>
              <TableCell>10.10%</TableCell>
              <TableCell>20.20%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3 Months</TableCell>
              <TableCell>10.10%</TableCell>
              <TableCell>20.20%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1 Year</TableCell>
              <TableCell>10.10%</TableCell>
              <TableCell>20.20%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <ExpandButton expanded={expanded}>Show More</ExpandButton>
      </div>
    );
  },
};
