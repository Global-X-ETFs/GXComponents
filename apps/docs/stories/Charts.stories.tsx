import type { Meta, StoryObj } from "@storybook/react";
import {
  BreakdownChart,
  PremiumDiscountChart,
  PerformanceBarChart,
  BufferChart,
  Select,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  BufferChartDataPoint,
} from "@global-x-etfs/gx-components";
import { useEffect, useMemo, useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Charts",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "left",
  },
} satisfies Meta<typeof BreakdownChart>;

export default meta;

const breakdownChartMockData = {
  "Other Metals/Minerals": 76.8,
  "Precious Metals": 13.7,
  "Financial Conglomerates": 5.4,
  "Metal Fabrication": 3.5,
  "Wholesale Distributors": 0.7,
};

export const BreakdownChartStory: StoryObj<typeof BreakdownChart> = {
  render: () => {
    return (
      <div className="p-8">
        <BreakdownChart data={breakdownChartMockData} title="Sector" />
      </div>
    );
  },
};

const premiumDiscountChartMockData = {
  "2024-04-01": -0.000630778,
  "2024-04-02": 0.00118285,
  "2024-04-03": -0.000395247,
  "2024-04-04": 0.000372991,
  "2024-04-05": 0.000375292,
  "2024-04-08": -0.000726403,
  "2024-04-09": 0.000112035,
  "2024-04-10": 0.001020089,
  "2024-04-11": 0.000599003,
  "2024-04-12": -0.000110648,
  "2024-04-15": 0.000365323,
  "2024-04-16": -0.001748556,
  "2024-04-17": 0.000790233,
  "2024-04-18": -0.000089272,
  "2024-04-19": 0.000569632,
  "2024-04-22": -0.001181305,
  "2024-04-23": -0.000293761,
  "2024-04-24": 0.000189531,
  "2024-04-25": -0.00041115,
  "2024-04-26": 0.000534673,
  "2024-04-29": -0.001091059,
  "2024-04-30": 0.001532748,
  "2024-05-01": 0.001115923,
  "2024-05-02": -0.001145832,
  "2024-05-03": -0.000753274,
  "2024-05-06": -0.000129317,
  "2024-05-07": -0.000114913,
};

export const PremiumDiscountChartStory: StoryObj<typeof PremiumDiscountChart> =
  {
    render: () => {
      return (
        <div className="max-w-[850px] p-8">
          <PremiumDiscountChart data={premiumDiscountChartMockData} />
        </div>
      );
    },
  };

const performanceBarChartMockProps = {
  labels: [
    "Aug-23",
    "Sep-23",
    "Oct-23",
    "Nov-23",
    "Dec-23",
    "Jan-24",
    "Feb-24",
    "Mar-24",
    "Apr-24",
    "May-24",
    "Jun-24",
    "Jul-24",
  ],
  premiumData: [
    2.5687775, 2.3593992, 2.8090352, 1.8899791, 1.9120684999999997, 2.1686818,
    2.1213911, 2.1779830000000002, 2.1294122, 1.8458233000000002, 1.895167,
    2.1177067000000003,
  ],
  distributionData: [
    1.0040603000000001, 0.9437610000000001, 1.0042143, 0.9476471, 0.95,
    1.0163073, 1.0102622, 1.0045147, 0.99942, 0.9297544, 0.9617798000000001,
    1.000564,
  ],
};

export const PerformanceBarChartStory: StoryObj<typeof PerformanceBarChart> = {
  render: () => {
    return (
      <div className="max-w-[850px] p-8">
        <PerformanceBarChart
          ticker="TICKER"
          {...performanceBarChartMockProps}
        />
      </div>
    );
  },
};

type BufferChartData = {
  AS_OF_DATE: Date;
  SPX_RETURN: number | null;
  CLOSE: number | null;
  BUFFER_REMAINING: number | null;
  BUFFER_TAKEN: number | null;
  CAP_REMAINING: number | null;
  CAP_TAKEN: number | null;
  DOWNSIDE_BEFORE_BUFFER: number | null;
  PERCENT_FROM_CAP: number | null;
}
type Period = {
  year: number;
  quarter?: number;
  display: string;
  startDate: Date;
  endDate: Date;
}


const getBufferChartPeriods = (): Period[] => 
    [
      
        {
          year: 2026,
          quarter: 1,
          display: "Q1 2026",
          startDate: new Date("2026-01-01T00:00:00.000Z"),
          endDate: new Date("2026-03-30T23:00:00.000Z"),
        },
        {
          year: 2025,
          quarter: 4,
          display: "Q4 2025",
          startDate: new Date("2025-09-30T23:00:00.000Z"),
          endDate: new Date("2025-12-31T00:00:00.000Z"),
        },
        {
          year: 2025,
          quarter: 3,
          display: "Q3 2025",
          startDate: new Date("2025-06-30T23:00:00.000Z"),
          endDate: new Date("2025-09-29T23:00:00.000Z"),
        },
        {
          year: 2025,
          quarter: 2,
          display: "Q2 2025",
          startDate: new Date("2025-03-31T23:00:00.000Z"),
          endDate: new Date("2025-06-29T23:00:00.000Z"),
        },
        {
          year: 2025,
          quarter: 1,
          display: "Q1 2025",
          startDate: new Date("2025-01-01T00:00:00.000Z"),
          endDate: new Date("2025-03-30T23:00:00.000Z"),
        },
        {
          year: 2024,
          quarter: 4,
          display: "Q4 2024",
          startDate: new Date("2024-09-30T23:00:00.000Z"),
          endDate: new Date("2024-12-31T00:00:00.000Z"),
        },
        {
          year: 2024,
          quarter: 3,
          display: "Q3 2024",
          startDate: new Date("2024-06-30T23:00:00.000Z"),
          endDate: new Date("2024-09-29T23:00:00.000Z"),
        },
        {
          year: 2024,
          quarter: 2,
          display: "Q2 2024",
          startDate: new Date("2024-03-31T23:00:00.000Z"),
          endDate: new Date("2024-06-27T23:00:00.000Z"),
        },
        {
          year: 2024,
          quarter: 1,
          display: "Q1 2024",
          startDate: new Date("2024-01-01T00:00:00.000Z"),
          endDate: new Date("2024-03-28T00:00:00.000Z"),
        },
        {
          year: 2023,
          quarter: 4,
          display: "Q4 2023",
          startDate: new Date("2023-09-30T23:00:00.000Z"),
          endDate: new Date("2023-12-29T00:00:00.000Z"),
        },
        {
          year: 2023,
          quarter: 3,
          display: "Q3 2023",
          startDate: new Date("2023-06-30T23:00:00.000Z"),
          endDate: new Date("2023-09-28T23:00:00.000Z"),
        },
        {
          year: 2023,
          quarter: 2,
          display: "Q2 2023",
          startDate: new Date("2023-03-31T23:00:00.000Z"),
          endDate: new Date("2023-06-29T23:00:00.000Z"),
        },
        {
          year: 2023,
          quarter: 1,
          display: "Q1 2023",
          startDate: new Date("2023-01-01T00:00:00.000Z"),
          endDate: new Date("2023-03-30T23:00:00.000Z"),
        },
      
  ];
import BufferChartData from "./data/bufferchart.data.json";

export const BufferChartStory: StoryObj<typeof BufferChart> = {
  render: () => {
    const [selectedPeriod, setSelectedPeriod] = useState<Period>(
      getBufferChartPeriods()[0],
    );
    const [filteredData, setFilteredData] = useState<BufferChartDataPoint[]>([]);
    const periods = getBufferChartPeriods();
  

    
    const mappedData: BufferChartDataPoint[] = useMemo(
      () =>
        BufferChartData
          .map((item) => ({
            date: new Date(item.AS_OF_DATE),
            spx_return: item.SPX_RETURN ?? undefined,
            close: item.CLOSE ?? undefined,
            buffer_remaining: item.BUFFER_REMAINING ?? undefined,
            buffer_taken: item.BUFFER_TAKEN ?? undefined,
            cap_remaining: item.CAP_REMAINING ?? undefined,
            cap_taken: item.CAP_TAKEN ?? undefined,
            downside_before_buffer: item.DOWNSIDE_BEFORE_BUFFER ?? undefined,
            percent_from_cap: item.PERCENT_FROM_CAP ?? undefined,
          }))
          .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
          ),
      [BufferChartData],
    );

    useEffect(() => {
      const start = selectedPeriod.startDate.getTime();
      const end = selectedPeriod.endDate.getTime();
    
      const result = mappedData.filter((item) => {
        const t = item.date.getTime();
        return t >= start && t <= end;
      });
    
      setFilteredData(result);
    }, [selectedPeriod, mappedData]);
    

    
    return (
      <div className="max-w-[850px] p-8">
        <Select
        onValueChange={(value) =>
          setSelectedPeriod(
            periods.find(
              (period) => period.display === (value as string),
            ) as Period,
          )
        }
        value={selectedPeriod?.display}
      >
        <SelectLabel>
          Select a quarter
        </SelectLabel>
        <SelectTrigger>
          <SelectValue defaultValue={selectedPeriod?.display} />
        </SelectTrigger>
        <SelectContent>
          {periods.map((period) => (
            <SelectItem key={period.display} value={period.display}>
              {period.display}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <BufferChart
        cutoffs={{
          buffer_min: -12,
          buffer_max: -3,
          cap_min: 0,
          cap_max: 3.64,
        }}
        data={filteredData}
        endDate={selectedPeriod?.endDate ?? new Date()}
        startDate={selectedPeriod?.startDate ?? new Date()}
      />
      </div>
    );
  },
};