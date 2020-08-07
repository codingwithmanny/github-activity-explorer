// IMPORTS
// --------------------------------------------------------
import ReactDOM from 'react-dom';
import React, { useState, useEffect, createRef } from 'react';
import { Line } from 'react-chartjs-2';
import { GitCommit } from '@styled-icons/feather';
import color from 'color';

// Styled Components
import {
  GraphStyles,
  GraphContainerStyles,
  GraphNoResultsStyles,
  GraphLoaderStyles,
} from './styles';
import { Colors } from '../../styles/DefaultStyles';
import { Loader } from '../../styles/Icons';

// Presentation Component
import Tooltip from '../Tooltip';

// TYPES
// --------------------------------------------------------
interface GraphProps {
  history?: Array<any>;
  loading: boolean;
}

interface GraphData {
  labels: Array<string>;
  datasets: Array<{
    label: string | number | null;
    fill: boolean;
    borderColor: string;
    pointBorderColor: string;
    borderCapStyle: string;
    borderDash: Array<any>;
    borderDashOffset: number;
    borderJoinStyle: string;
    pointBackgroundColor: string;
    pointBorderWidth: number;
    pointRadius: number;
    pointHitRadius: number;
    pointHoverRadius: number;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    pointHoverBorderWidth: number;
    data: Array<null | number>;
  }>;
}

// MAIN PRESENTATION COMPONENT
// --------------------------------------------------------
/**
 * Graph Presentation Component
 * @param {Object} props component props
 * @returns {JSX} React compoennt
 */
const Graph: React.FC<GraphProps> = (props) => {
  // State / Props
  const { history, loading } = props;
  const [data, setData] = useState<GraphData>({
    labels: [],
    datasets: [],
  });
  const chartRef = createRef<any>();

  // Config Chart
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: false,
    tooltips: {
      enabled: false,
      custom: (tooltipModel: any) => {
        // Get Reference
        const chart: any = chartRef.current;
        if (!chart) {
          return;
        }

        let tooltipEl: HTMLElement | null = document.getElementById(
          'chartjs-tooltip',
        );

        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          document.body.appendChild(tooltipEl);
        }

        ReactDOM.render(
          <Tooltip
            model={tooltipModel}
            history={history || []}
            position={chart.chartInstance.canvas.getBoundingClientRect()}
          />,
          document.querySelector(`#${tooltipEl.id}`),
        );
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            zeroLineColor: Colors.deepBlue,
            lineWidth: 0,
            zeroLineWidth: 3,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            zeroLineColor: `${Colors.deepBlue}`,
            lineWidth: 0,
            zeroLineWidth: 3,
          },
        },
      ],
    },
  };

  // Hooks
  /**
   * On history load set graph labels and dataset
   */
  useEffect(() => {
    if (history && history?.length > 0) {
      // Find index of repo commit logs data greater than 0 to use for labels
      const historyIndex = history?.findIndex(
        (i) => (Object.entries(i?.logs)?.length ?? 0) > 0,
      );

      setData((prevData: any) => ({
        ...prevData,
        // Updated labels
        labels:
          Object.entries(
            history[historyIndex === -1 ? 0 : historyIndex]?.logs,
          )?.map((i) => i[0]) ?? [],
        // Updated data
        datasets: history.map((i: any) => {
          const dateEntries: Array<Array<any>> = Object.entries(i?.logs).filter(
            (item: any) => item?.[1]?.commits?.length > 0,
          );
          const from = dateEntries?.[0]?.[1]?.datetime ?? '';
          const to =
            dateEntries?.[dateEntries?.length - 1]?.[1]?.datetime ?? '';

          return {
            label: i.id,
            fill: false,
            borderColor: `${color(i.color)
              .fade(i.active ? 0 : 0.7)
              .toString()}`,
            pointBorderColor: `${color(i.color)
              .fade(i.active ? 0 : 0.7)
              .toString()}`,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBackgroundColor: `${Colors.white}`,
            pointBorderWidth: 2,
            pointRadius: 8,
            pointHitRadius: 10,
            pointHoverRadius: 12,
            pointHoverBackgroundColor: `${color(i.color)
              .fade(i.active ? 0 : 0.7)
              .toString()}`,
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 6,
            data: Object.entries(i?.logs).map((item: Array<any>) => {
              const len = item[1].commits?.length;
              return len === 0 && !item[1]?.datetime.isBetween(from, to)
                ? null
                : len;
            }),
          };
        }),
      }));

      // Once set scroll to the end (all the way to the right)
      const graphContainerWidth =
        document?.querySelector('#graph-container > div')?.clientWidth ?? 0;
      const container = document?.querySelector('#graph-container');
      if (container) {
        container.scrollTo({
          left: graphContainerWidth,
        });
      }
    } else {
      // Reset data and scrolling
      setData({
        labels: [],
        datasets: [],
      });
      // Reset scrolling
      const container = document?.querySelector('#graph-container');
      if (container) {
        container.scrollTo({
          left: 0,
        });
      }
    }
  }, [history]);

  // Render
  return (
    <GraphStyles>
      <GraphLoaderStyles loading={loading.toString()}>
        <Loader />
      </GraphLoaderStyles>
      <GraphNoResultsStyles show={data?.datasets?.length === 0 && true}>
        <div>
          <GitCommit strokeWidth={2} />
          <p>
            Add a GitHub repo from the <span>Search</span>
          </p>
        </div>
      </GraphNoResultsStyles>
      <GraphContainerStyles
        id="graph-container"
        show={data?.datasets?.length > 0 && true}
      >
        <div>
          {data && data?.datasets?.length > 0 && (
            <Line options={chartOptions} data={data} ref={chartRef} />
          )}
        </div>
      </GraphContainerStyles>
    </GraphStyles>
  );
};

// EXPORTS
// --------------------------------------------------------
export default Graph;
