import React, { useMemo, useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
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
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    annotationPlugin,
);

export interface BufferChartDataPoint {
    date: string;
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
    periodOptions?: Array<{ label: string; value: string; data: BufferChartDataPoint[] }>;
    onPeriodChange?: (period: string) => void;
}

export function BufferChart({
    data,
    cutoffs,
    fundTicker = 'Fund',
    outcomeCapLabel = 'Outcome Period Cap',
    outcomeBufferLabel = 'Outcome Period Buffer',
    tooltipDate = 'Date',
    tooltipSpxReturn = 'SPX Return',
    tooltipDownside = 'Downside Before Buffer',
    tooltipBufferTaken = 'Buffer Taken',
    tooltipBufferRem = 'Buffer Remaining',
    tooltipCapTaken = 'Cap Taken',
    tooltipRemUp = 'Remaining Upside',
    periodOptions,
    onPeriodChange,
}: BufferChartProps) {
    const chartRef = useRef<ChartJS<'line'>>(null);
    const [selectedPeriod, setSelectedPeriod] = useState<string | undefined>(
        periodOptions?.[0]?.value
    );
    const [currentData, setCurrentData] = useState<BufferChartDataPoint[]>(data);

    useEffect(() => {
        if (periodOptions && selectedPeriod) {
            const selectedPeriodData = periodOptions.find(p => p.value === selectedPeriod);
            if (selectedPeriodData) {
                setCurrentData(selectedPeriodData.data);
                onPeriodChange?.(selectedPeriod);
            }
        } else {
            setCurrentData(data);
        }
    }, [selectedPeriod, periodOptions, data, onPeriodChange]);

    // Filter out incomplete data points
    const validData = useMemo(() => {
        return currentData.filter(
            (point) =>
                point.spx_return !== undefined &&
                point.close !== undefined &&
                point.date
        );
    }, [currentData]);

    // Calculate normalized buffer return
    const bufferReturnNormalized = useMemo(() => {
        if (validData.length === 0) return [];
        const initialCloseValue = validData[0].close ?? validData[1]?.close ?? 0;
        if (initialCloseValue === 0) return [];

        return validData.map((price) => {
            if (price.close === undefined) return null;
            return ((price.close - initialCloseValue) / initialCloseValue) * 100;
        });
    }, [validData]);

    const labels = useMemo(() => validData.map(({ date }) => date), [validData]);

    const chartData = useMemo(() => {
        return {
            labels,
            datasets: [
                {
                    type: 'line' as const,
                    label: 'SPX Return',
                    data: validData.map(({ spx_return }) => spx_return ?? null),
                    fill: false,
                    backgroundColor: '#FF5400',
                    borderColor: '#FF5400',
                    pointRadius: 0,
                    tension: 0,
                },
                {
                    type: 'line' as const,
                    label: fundTicker,
                    data: bufferReturnNormalized,
                    fill: false,
                    backgroundColor: '#002F37',
                    borderColor: '#002F37',
                    pointRadius: 0,
                    tension: 0,
                },
            ],
        };
    }, [labels, validData, bufferReturnNormalized, fundTicker]);

    const options: ChartOptions<'line'> = useMemo(() => {
        return {
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                x: {
                    ticks: {
                        font: {
                            family: 'proxima-nova-condensed, sans-serif',
                        },
                    },
                    grid: {
                        display: false,
                    },
                },
                y: {
                    min: Number(Math.min(cutoffs.buffer_min, ...bufferReturnNormalized, ...validData.map(({ spx_return }) => spx_return ?? 0)).toFixed(0)) - 10,
                    max: Number(Math.max(cutoffs.cap_max, ...bufferReturnNormalized, ...validData.map(({ spx_return }) => spx_return ?? 0)).toFixed(0)) + 10,
                    ticks: {
                        font: {
                            size: 15,
                            family: 'proxima-nova-condensed, sans-serif',
                        },
                        callback: (value: number) => value + '%',
                        stepSize: 1
                    },
                },
            },
            plugins: {
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                },
                legend: {
                    display: false,
                },
                annotation: {
                    drawTime: 'beforeDatasetsDraw',
                    annotations: [
                        // // Max Cap Line
                        {
                            type: 'line' as const,
                            mode: 'horizontal',
                            yMax: cutoffs.cap_max,
                            yMin: cutoffs.cap_max, 
                            borderColor: '#002F37',
                            borderWidth: 1,
                            borderDash: [10, 6]
                        },
                        // Cap Label
                        {
                            type: 'label',
                            content: `${outcomeCapLabel}: ${(cutoffs.cap_max - cutoffs.cap_min).toFixed(2)}%`,
                            xValue: 'end',
                            yValue: cutoffs.cap_max,
                            font: {
                                family: 'proxima-nova-condensed, sans-serif',
                                size: 14,
                                weight: 'bold'
                            },
                            color: '#777',
                            backgroundColor: 'transparent',
                            xAdjust: -120,
                            yAdjust: -14
                        },
                        // Min Cap Line (If Non-Zero)
                         ...(cutoffs.cap_min !== 0
                             ? [
                                   {
                                       type: 'line' as const,
                                       mode: 'horizontal',
                                       yMax: cutoffs.cap_min,
                                       yMin: cutoffs.cap_min,
                                       borderColor: '#002F37',
                                       borderWidth: 1,
                                       borderDash: [10, 6],
                                   },
                               ]
                             : []),
                         // Zero Line
                        {
                            type: 'line' as const,
                            mode: 'horizontal',
                            value: 0,
                            scaleID: 'y-axis-0',
                            yMin: 0,
                            yMax: 0,
                            borderColor: '#8E8E8E',
                            borderWidth: 2.5,
                            borderDash: [2.5, 4],
                        },
                        // Max Buffer Line (If Non-Zero)
                        ...(cutoffs.buffer_max !== 0
                            ? [
                                  {
                                      type: 'line' as const,
                                      mode: 'horizontal' as const,
                                      yMax: cutoffs.buffer_max,
                                      yMin: cutoffs.buffer_max,
                                      borderColor: '#002F37',
                                      borderWidth: 1,
                                      borderDash: [10, 6],
                                  },
                               ]
                             : []),
                        // Min Buffer Line
                        {
                            type: 'line',
                            mode: 'horizontal',
                            yMax: cutoffs.buffer_min,
                            yMin: cutoffs.buffer_min,
                            borderColor: '#002F37',
                            borderWidth: 1,
                            borderDash: [10, 6],
                            label: {
                                content: `${outcomeBufferLabel}: ${Math.abs(cutoffs.buffer_min - cutoffs.buffer_max).toFixed(2)}%`,
                                font: {
                                    family: 'proxima-nova-condensed, sans-serif',
                                    size: 14
                                },
                                color: '#777',
                                position: 'end',
                                yAdjust: 14
                            },
                        },
                        // Min Buffer Line Label
                        {
                            type: 'label',
                            content: `${outcomeBufferLabel}: ${Math.abs(cutoffs.buffer_min - cutoffs.buffer_max).toFixed(2)}%`,
                            xValue: 'end',
                            yValue: cutoffs.buffer_min,
                            font: {
                                family: 'proxima-nova-condensed, sans-serif',
                                size: 14,
                                weight: 'bold'
                            },
                            color: '#777',
                            xAdjust: -120,
                            yAdjust: 14,
                        },
                        // Buffer Range Box
                        {
                            type: 'box',
                            yMin: cutoffs.buffer_min,
                            yMax: cutoffs.buffer_max,
                            backgroundColor: 'rgba(255, 84, 0, 0.3)',
                            borderWidth: 0,
                        },
                        // Cap Range Box
                        {
                            type: 'box',
                            yMin: cutoffs.cap_min,
                            yMax: cutoffs.cap_max,
                            backgroundColor: 'rgba(0, 47, 55, 0.3)',
                            borderWidth: 0,
                        },
                    ],
                },
            },
        };
    }, [
        cutoffs,
        outcomeCapLabel,
        outcomeBufferLabel
    ]);
    return (
        <div className="w-full aspect-video">
            <Line ref={chartRef} data={chartData} options={options} />
        </div>
    );
}
