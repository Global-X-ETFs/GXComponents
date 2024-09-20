import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

interface PerformanceBarChartProps {
  ticker: string;
  labels: string[];
  premiumData: number[];
  distributionData: number[];
}

export const PerformanceBarChart: React.FC<PerformanceBarChartProps> = ({
  ticker,
  labels,
  premiumData,
  distributionData,
}) => {
  const max = React.useMemo(() => Math.ceil(Math.max(...premiumData)), [distributionData]);

  const data = {
    labels,
    datasets: [
      {
        label: `${ticker} Premium`,
        data: premiumData,
        backgroundColor: '#FF4A00', // orange color
        borderColor: '#FF4A00', // orange color
        borderWidth: 1,
        yAxisID: 'y',
        type: 'bar',
        barPercentage: 0.5,
        order: 2
      },
      {
        label: `${ticker} Distribution`,
        data: distributionData,
        backgroundColor: '#002930', // blue color
        borderColor: '#83A8A9', // blue color
        borderWidth: 1,
        type: 'line' as const,
        fill: false,
        pointRadius: 4,
        pointBorderColor: '#83A8A9',
        showLine: false,
        yAxisID: 'y1',
        order: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        ticks: {
          beginAtZero: true,
          callback: function (value: any) {
            return value + '%';
          },
        },
      },
      y1: {
        min: 0,
        max,
        type: 'linear' as const,
        display: false,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: false,
          callback: function (value: any) {
            return value + '%';
          },
        },
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            context.formattedValue = context.formattedValue + '%';
          },
          labelPointStyle: function (context) {
            return {
              pointStyle: context.dataset.label.indexOf('Distribution') !== -1 ? 'circle' : 'rect',
            };
          }
        },
        itemSort: function (a, b) {
          return b?.raw - a?.raw;
        }
      },
    },
  };

  return (
    <>
      {/* @ts-ignore */}
      <Bar data={data} options={options} className="max-h-[500px]" />
      <div className="flex justify-center items-center gap-x-5 my-1.5">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange mr-2" />
          <span className="font-porxima text-md text-neutral-100">{ticker} Premium</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#002930] border-2 border-[#83A8A9] rounded-full mr-1.5" />
          <span className="font-porxima text-md text-neutral-100">{ticker} Distributions</span>
        </div>
      </div>
    </>
  );
};

export default PerformanceBarChart;
