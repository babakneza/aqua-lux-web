import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartData {
  type: 'line';
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
  }>;
  units: {
    x: string;
    yLeft: string;
    yRight: string;
  };
}

interface PerformanceChartProps {
  chartData: ChartData;
}

export const PerformanceChart = ({ chartData }: PerformanceChartProps) => {
  const [loading, setLoading] = useState(true);
  const chartRef = useRef(null);

  useEffect(() => {
    // Simulate lazy loading
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Skeleton className="w-full h-80" />;
  }

  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets.map((ds, idx) => ({
      label: ds.label,
      data: ds.data,
      borderColor: idx === 0 ? 'hsl(var(--accent))' : 'hsl(var(--gold))',
      backgroundColor: idx === 0 ? 'hsla(var(--accent), 0.1)' : 'hsla(var(--gold), 0.1)',
      tension: 0.3,
      pointRadius: 4,
      pointHoverRadius: 6,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'hsl(var(--foreground))',
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Performance Characteristics',
        color: 'hsl(var(--foreground))',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: chartData.units.x,
          color: 'hsl(var(--foreground))',
        },
        ticks: {
          color: 'hsl(var(--muted-foreground))',
        },
        grid: {
          color: 'hsla(var(--border), 0.3)',
        },
      },
      y: {
        title: {
          display: true,
          text: chartData.units.yLeft,
          color: 'hsl(var(--foreground))',
        },
        ticks: {
          color: 'hsl(var(--muted-foreground))',
        },
        grid: {
          color: 'hsla(var(--border), 0.3)',
        },
      },
    },
  };

  return (
    <div className="glass-panel p-6 rounded-xl">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};
