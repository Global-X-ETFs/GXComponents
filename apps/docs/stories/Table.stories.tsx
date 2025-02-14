import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeader,
  TableCaption,
  TableCell,
} from "@global-x-etfs/gx-components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

//Net Assets (%)	Ticker	Name	SEDOL	Market Price ($)	Shares Held	Market Value ($)
// 13.02	MSFT	MICROSOFT CORP	2588173	342.66	3,118,757	1,068,673,273.62
// 12.37	AAPL	APPLE INC	2046251	190.54	5,328,341	1,015,262,094.14
// 7.56	NVDA	NVIDIA CORP	2379504	459.77	1,349,517	620,467,431.09
// 7.07	AMZN	AMAZON.COM INC	2000019	134.30	4,320,036	580,180,834.80

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  render: () => (
    <div className="w-[600px] md:w-[700px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Net Assets (%)</TableHead>
            <TableHead>Ticker</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>SEDOL</TableHead>
            <TableHead>Market Price ($)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>13.02</TableCell>
            <TableCell>MSFT</TableCell>
            <TableCell className="font-bold">MICROSOFT CORP</TableCell>
            <TableCell>2588173</TableCell>
            <TableCell>342.66</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12.37</TableCell>
            <TableCell>AAPL</TableCell>
            <TableCell className="font-bold">APPLE INC</TableCell>
            <TableCell>2046251</TableCell>
            <TableCell>190.54</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7.56</TableCell>
            <TableCell>NVDA</TableCell>
            <TableCell className="font-bold">NVIDIA CORP</TableCell>
            <TableCell>2379504</TableCell>
            <TableCell>459.77</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7.07</TableCell>
            <TableCell>AMZN</TableCell>
            <TableCell className="font-bold">AMAZON.COM INC</TableCell>
            <TableCell>2000019</TableCell>
            <TableCell>134.30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const NoData: Story = {
  render: () => (
    <div className="w-[600px] md:w-[700px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Net Assets (%)</TableHead>
            <TableHead>Ticker</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>SEDOL</TableHead>
            <TableHead>Market Price ($)</TableHead>
            <TableHead>Shares Held</TableHead>
            <TableHead>Market Value ($)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </div>
  ),
};

export const NoHeader: Story = {
  render: () => (
    <div className="w-[600px] md:w-[700px]">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>13.02</TableCell>
            <TableCell>MSFT</TableCell>
            <TableCell className="font-bold">MICROSOFT CORP</TableCell>
            <TableCell>2588173</TableCell>
            <TableCell>342.66</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12.37</TableCell>
            <TableCell>AAPL</TableCell>
            <TableCell className="font-bold">APPLE INC</TableCell>
            <TableCell>2046251</TableCell>
            <TableCell>190.54</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7.56</TableCell>
            <TableCell>NVDA</TableCell>
            <TableCell className="font-bold">NVIDIA CORP</TableCell>
            <TableCell>2379504</TableCell>
            <TableCell>459.77</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7.07</TableCell>
            <TableCell>AMZN</TableCell>
            <TableCell className="font-bold">AMAZON.COM INC</TableCell>
            <TableCell>2000019</TableCell>
            <TableCell>134.30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <div className="w-[600px] md:w-[700px]">
      <Table>
        <TableCaption>
          Holdings are subject to change. &quot;Cash&quot; denotes U.S. dollars.
        </TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>13.02</TableCell>
            <TableCell>MSFT</TableCell>
            <TableCell className="font-bold">MICROSOFT CORP</TableCell>
            <TableCell>2588173</TableCell>
            <TableCell>342.66</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12.37</TableCell>
            <TableCell>AAPL</TableCell>
            <TableCell className="font-bold">APPLE INC</TableCell>
            <TableCell>2046251</TableCell>
            <TableCell>190.54</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7.56</TableCell>
            <TableCell>NVDA</TableCell>
            <TableCell className="font-bold">NVIDIA CORP</TableCell>
            <TableCell>2379504</TableCell>
            <TableCell>459.77</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7.07</TableCell>
            <TableCell>AMZN</TableCell>
            <TableCell className="font-bold">AMAZON.COM INC</TableCell>
            <TableCell>2000019</TableCell>
            <TableCell>134.30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const PrimaryLoading: Story = {
  render: () => (
    <div className="w-[600px] md:w-[700px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Net Assets (%)</TableHead>
            <TableHead>Ticker</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>SEDOL</TableHead>
            <TableHead>Market Price ($)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell loading>13.02</TableCell>
            <TableCell loading>MSFT</TableCell>
            <TableCell loading className="font-bold">
              MICROSOFT CORP
            </TableCell>
            <TableCell loading>2588173</TableCell>
            <TableCell loading>342.66</TableCell>
          </TableRow>
          <TableRow>
            <TableCell loading>12.37</TableCell>
            <TableCell loading>AAPL</TableCell>
            <TableCell loading className="font-bold">
              APPLE INC
            </TableCell>
            <TableCell loading>2046251</TableCell>
            <TableCell loading>190.54</TableCell>
          </TableRow>
          <TableRow>
            <TableCell loading>7.56</TableCell>
            <TableCell loading>NVDA</TableCell>
            <TableCell loading className="font-bold">
              NVIDIA CORP
            </TableCell>
            <TableCell loading>2379504</TableCell>
            <TableCell loading>459.77</TableCell>
          </TableRow>
          <TableRow>
            <TableCell loading>7.07</TableCell>
            <TableCell loading>AMZN</TableCell>
            <TableCell loading className="font-bold">
              AMAZON.COM INC
            </TableCell>
            <TableCell loading>2000019</TableCell>
            <TableCell loading>134.30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};
