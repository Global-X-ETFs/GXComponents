import React, { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function capitalizeWords(sentence: string): string {
  if (!sentence) return '';

  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function roundDecimal(value: number, decimalPlaces = 1): number {
  const roundedValue = Math.round(value * 1000) / 10; 
  return roundedValue;
}

function formatNumber(value: number): string {
  return value.toFixed(1);
}

function prepareData(data: Record<string, number>, maxRecords = 11): Record<string, number> {
  const entries = Object.entries(data);
  // Convert each entry value to a percentage
  const formattedEntries: (string | number)[][] = entries.map(([key, value]) => [key, roundDecimal(value)]);

  // Sort the entries by value in descending order
  const sortedEntries = formattedEntries.sort(([, valueA]: [string, number], [, valueB]: [string, number]) => valueB - valueA);

  // Get the top {maxRecords} entries and the rest
  const topEntries = sortedEntries.slice(0, maxRecords);

  // Sum up the topEntries values for the "Other" row
  const entriesTotal = topEntries.reduce((sum: number, [, value]: [string, number]) => sum + value, 0);
  // Check the discrepancy between the sum of the top entries and 100
  const otherTotal = (100 - entriesTotal);

  // Convert the top entries back to a record
  const topRecord = Object.fromEntries(topEntries);

  // Add the "Other" category if there is a discrepancy (> 0)
  if (otherTotal > 0) {
    topRecord["Other"] = parseFloat(otherTotal.toFixed(1));
  }
  return topRecord;
}

export interface BreakdownChartProps {
  title: string;
  data: Record<string, number>;
  capitalize?: boolean;
}

export function BreakdownChart({ data, title, capitalize=true }: BreakdownChartProps): JSX.Element {
  const records = prepareData(data);
  const labels = capitalize ? Object.keys(records).map(capitalizeWords) : Object.keys(records);
  const values = Object.values(records);

  const backgroundColor = useMemo(() => [
    "#FF5400",
    "#002F37",
    "#8EB1B2",
    "#606060",
    "#3d3935",
    "#727272",
    "#8E8E8E",
    "#A9A9A8",
    "#BCBEBC",
    "#D2D3D1",
    "#E5E6E5",
    "#F4F4F4",
  ], []);

  const chartData = {
    datasets: [
      {
        labels,
        data: values,
        backgroundColor,
        borderColor: backgroundColor,
      }
    ]
  };

  const options = {
    cutout: "60%",
    aspectRatio: 1,
    responsive: true,
    hover: { mode: null },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context?.dataset?.labels?.[context.dataIndex];
            const value = context?.formattedValue;
            return ` ${label}: ${value}%`;
          }
        }
      },
      legend: {
        display: false,
      },
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-x-16">
      <div className="w-[210px] h-[210px]">
        <Doughnut data={chartData} options={options} />
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-gray-200 text-ms font-proximatight font-bold uppercase text-neutral-200">
            <th className="w-6" />
            <th>{title}</th>
            <th className="text-right">Weight (%)</th>
          </tr>
        </thead>
        <tbody>
          {labels.map((label, index) => (
            <tr key={label} className="font-proximatight text-granite text-ml border-b border-gray-200">
              <td>
                <div className="w-3 h-3 inline-block rounded-full" style={{ background: backgroundColor[index] }} />
              </td>
              <td>
                {label}
              </td>
              <td className="text-right">{formatNumber(values[index])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}