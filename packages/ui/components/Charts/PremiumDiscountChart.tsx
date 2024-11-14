"use client";

import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface PremiumDiscountChartProps {
  data: Record<string, number>;
}

const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector('div');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.style.background = 'rgba(255, 84, 0, .95)';
    tooltipEl.style.color = 'white';
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.transform = 'translate(-50%, -120%)';
    tooltipEl.style.transition = 'opacity .3s ease';

    const arrow = document.createElement('div');
    arrow.style.position = 'absolute';
    arrow.style.bottom = '-10px';
    arrow.style.left = '50%';
    arrow.style.transform = 'translateX(-50%)';
    arrow.style.width = '0';
    arrow.style.height = '0';
    arrow.style.borderLeft = '10px solid transparent';
    arrow.style.borderRight = '10px solid transparent';
    arrow.style.borderTop = '10px solid #ff5400';
    tooltipEl.appendChild(arrow);

    const table = document.createElement('table');
    table.style.margin = '0px';

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const bodyLines = tooltip.body[0].lines;

    const tableHead = document.createElement('thead');

    const tableBody = document.createElement('tbody');
    bodyLines.forEach((body) => {
      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      tr.style.borderWidth = '0';

      const td = document.createElement('td');
      td.style.borderWidth = '0';
      td.style.textAlign = 'center';

      const text = document.createTextNode(body);

      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector('table');
    tableRoot.style.minWidth = '85px';

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top = positionY + tooltip.caretY + 'px';
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

export function PremiumDiscountChart({ data }: PremiumDiscountChartProps): JSX.Element {
  const labels = Object.keys(data);
  // Convert to percentage values
  const values = useMemo(() => {
    return Object.values(data).map((value) => value * 100)
  }, [data]);

  // Get the min and max values for the y-axis
  const minVal = useMemo(() => {
    return Math.min(Math.round(Math.min(...values) * 2) / 2 - 0.5, -2);
  }, [values]);
  const maxVal = useMemo(() => {
    return Math.max(Math.round(Math.max(...values) * 2) / 2 + 0.5, 2);
  }, [values]);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: '#ff5400',
        borderColor: '#ff5400',
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    aspectRatio: 2,
    hover: { mode: null },
    elements: {
      line: {
        tension: 0.3,
      }
    },
    plugins: {
      tooltip: {
        enabled: false,
        intersect: true,
        callbacks: {
          label: function (context) {
            const label = `Date: ${context.label}`;
            const value = `${(context.raw).toFixed(4).replace(/[.,]0$/, "")}%`
            return [`${label}`, `Premium Discount: ${value}`];
          }
        },
        external: externalTooltipHandler,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        min: minVal,
        max: maxVal,
        border: { dash: [2, 3], display: false, color: 'rgba(0, 0, 0, 0.2)' }, // for the grid lines
        grid: {
          color: 'rgba(0, 0, 0, 0.2)', // for the grid lines
          tickColor: 'rgba(0, 0, 0, 0.2)', // for the tick mark
          tickWidth: 0,
          lineWidth: 2,
          drawBorder: false,
        },
        ticks: {
          stepSize: 0.5,
          autoSkip: false,

          callback: function (dataLabel) {
            return `${(dataLabel).toFixed(1).replace(/[.,]0$/, "")}%`
          },
          color: 'rgba(0, 0, 0, 0.4)',
        },
      }
    }
  };

  return (
    <div className="w-[99%] relative flex pr-3 h-[450px] premium-discount-chart">
      <Line data={chartData} options={options} style={{ height: '100%' }} />
    </div>
  );
}