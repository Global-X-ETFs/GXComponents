import React, { useMemo, useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

export interface BufferChartDataPoint {
  date: Date;
  spx_return?: number;
  close?: number;
  buffer_remaining?: number;
  buffer_taken?: number;
  cap_remaining?: number;
  cap_taken?: number;
  downside_before_buffer?: number;
  percent_from_cap?: number;
}

export interface BufferChartCutoffs {
  buffer_min: number;
  buffer_max: number;
  cap_min: number;
  cap_max: number;
}

export interface BufferChartProps {
  data: BufferChartDataPoint[];
  cutoffs: BufferChartCutoffs;
  endDate: Date;
  fundTicker?: string;
  outcomeCapLabel?: string;
  outcomeBufferLabel?: string;
  tooltipDate?: string;
  tooltipSpxReturn?: string;
  tooltipDownside?: string;
  tooltipBufferTaken?: string;
  tooltipBufferRem?: string;
  tooltipCapTaken?: string;
  tooltipRemUp?: string;
}

export function BufferChart({
  data,
  cutoffs,
  endDate,
  fundTicker = "Fund",
  outcomeCapLabel = "Outcome Period Cap",
  outcomeBufferLabel = "Outcome Period Buffer",
  tooltipDate = "Date",
  tooltipSpxReturn = "SPX Return",
  tooltipDownside = "Downside Before Buffer",
  tooltipBufferTaken = "Buffer Taken",
  tooltipBufferRem = "Buffer Remaining",
  tooltipCapTaken = "Cap Taken",
  tooltipRemUp = "Remaining Upside",
}: BufferChartProps) {
  const chartRef = useRef<ChartJS<"line">>(null);

  // Pad the data with empty data points to the last business day of the year
  const paddedData = useMemo(() => {
    if (data.length === 0) return [];

    let paddedData: BufferChartDataPoint[] = [];
    const cursor = new Date(data[data.length - 1].date);
    
    while (cursor <= endDate) {
      paddedData.unshift({
        date: new Date(cursor),
        spx_return: undefined,
        close: null,
        buffer_remaining: null,
        buffer_taken: null,
        cap_remaining: null,
        cap_taken: null,
        downside_before_buffer: null,
        percent_from_cap: null,
      });
      cursor.setDate(cursor.getDate() + 1);
    }

    data.forEach((point) => {
      paddedData.push(point);
    });

    paddedData = paddedData.sort((a, b) => a.date.getTime() - b.date.getTime());

    return paddedData;
  }, [data]);



  // Calculate normalized buffer return
  const bufferReturnNormalized = useMemo(() => {
    if (paddedData.length === 0) return [];
    const initialCloseValue = paddedData[0].close ?? 0;

    return paddedData.map((price) => {
      if (!price.close) return null;
      return ((price.close - initialCloseValue) / initialCloseValue) * 100;
    });
  }, [paddedData]);

  console.log(bufferReturnNormalized);

  const chartData = useMemo(() => {
    return {
      labels: paddedData.map((point) => point.date.toLocaleDateString()),
      datasets: [
        {
          type: "line" as const,
          label: "SPX Return",
          data: paddedData.map((point) => point.spx_return ?? null),
          fill: false,
          backgroundColor: "#FF5400",
          borderColor: "#FF5400",
          pointRadius: 0,
          tension: 0,
        },
        {
          type: "line" as const,
          label: fundTicker,
          data: bufferReturnNormalized,
          fill: false,
          backgroundColor: "#002F37",
          borderColor: "#002F37",
          pointRadius: 0,
          tension: 0,
        },
      ],
    };
  }, [paddedData, data, bufferReturnNormalized, fundTicker]);

  const options: ChartOptions<"line"> = useMemo(() => {
    const allValues = [
      cutoffs.buffer_min,
      cutoffs.cap_max,
      ...bufferReturnNormalized,
      ...paddedData.map((point) => point.spx_return ?? null),
    ];

    const yMin = Math.floor(Math.min(...allValues)) - 10;
    const yMax = Math.ceil(Math.max(...allValues)) + 10;
    return {
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        x: {
          ticks: {
            font: {
              family: "proxima-nova-condensed, sans-serif",
            },
          },
          grid: {
            display: false,
          },
        },
        y: {
          min: yMin,
          max: yMax,
          ticks: {
            font: {
              size: 15,
              family: "proxima-nova-condensed, sans-serif",
            },
            callback: (value: number) => value + "%",
            stepSize: 1,
          },
        },
      },
      plugins: {
        tooltip: {
          enabled: true,
          mode: "index",
          intersect: false,
        },
        legend: {
          display: false,
        },
        annotation: {
          drawTime: "beforeDatasetsDraw",
          annotations: [
            // // Max Cap Line
            {
              type: "line" as const,
              mode: "horizontal",
              yMax: cutoffs.cap_max,
              yMin: cutoffs.cap_max,
              borderColor: "#002F37",
              borderWidth: 1,
              borderDash: [10, 6],
            },
            // Cap Label
            {
              type: "label",
              content: `${outcomeCapLabel}: ${(cutoffs.cap_max - cutoffs.cap_min).toFixed(2)}%`,
              xValue: "end",
              yValue: cutoffs.cap_max,
              font: {
                family: "proxima-nova-condensed, sans-serif",
                size: 14,
                weight: "bold",
              },
              color: "#777",
              backgroundColor: "transparent",
              xAdjust: -120,
              yAdjust: -14,
            },
            // Min Cap Line (If Non-Zero)
            ...(cutoffs.cap_min !== 0
              ? [
                  {
                    type: "line" as const,
                    mode: "horizontal",
                    yMax: cutoffs.cap_min,
                    yMin: cutoffs.cap_min,
                    borderColor: "#002F37",
                    borderWidth: 1,
                    borderDash: [10, 6],
                  },
                ]
              : []),
            // Zero Line
            {
              type: "line" as const,
              mode: "horizontal",
              value: 0,
              scaleID: "y-axis-0",
              yMin: 0,
              yMax: 0,
              borderColor: "#8E8E8E",
              borderWidth: 2.5,
              borderDash: [2.5, 4],
            },
            // Max Buffer Line (If Non-Zero)
            ...(cutoffs.buffer_max !== 0
              ? [
                  {
                    type: "line" as const,
                    mode: "horizontal" as const,
                    yMax: cutoffs.buffer_max,
                    yMin: cutoffs.buffer_max,
                    borderColor: "#002F37",
                    borderWidth: 1,
                    borderDash: [10, 6],
                  },
                ]
              : []),
            // Min Buffer Line
            {
              type: "line",
              mode: "horizontal",
              yMax: cutoffs.buffer_min,
              yMin: cutoffs.buffer_min,
              borderColor: "#002F37",
              borderWidth: 1,
              borderDash: [10, 6],
              label: {
                content: `${outcomeBufferLabel}: ${Math.abs(cutoffs.buffer_min - cutoffs.buffer_max).toFixed(2)}%`,
                font: {
                  family: "proxima-nova-condensed, sans-serif",
                  size: 14,
                },
                color: "#777",
                position: "end",
                yAdjust: 14,
              },
            },
            // Min Buffer Line Label
            {
              type: "label",
              content: `${outcomeBufferLabel}: ${Math.abs(cutoffs.buffer_min - cutoffs.buffer_max).toFixed(2)}%`,
              xValue: "end",
              yValue: cutoffs.buffer_min,
              font: {
                family: "proxima-nova-condensed, sans-serif",
                size: 14,
                weight: "bold",
              },
              color: "#777",
              xAdjust: -120,
              yAdjust: 14,
            },
            // Buffer Range Box
            {
              type: "box",
              yMin: cutoffs.buffer_min,
              yMax: cutoffs.buffer_max,
              backgroundColor: "rgba(255, 84, 0, 0.3)",
              borderWidth: 0,
            },
            // Cap Range Box
            {
              type: "box",
              yMin: cutoffs.cap_min,
              yMax: cutoffs.cap_max,
              backgroundColor: "rgba(0, 47, 55, 0.3)",
              borderWidth: 0,
            },
          ],
        },
      },
    };
  }, [cutoffs, outcomeCapLabel, outcomeBufferLabel]);
  return (
    <div className="w-full aspect-video">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
}
