
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const GlacierChart = () => {
  const glacierData = [
    { "Mean cumulative mass balance": 0.0, "Year": 1945 },
    { "Mean cumulative mass balance": -1.13, "Year": 1946 },
    { "Mean cumulative mass balance": -3.19, "Year": 1947 },
    { "Mean cumulative mass balance": -28.652, "Year": 2014 }
  ];

  const data = {
    labels: glacierData.map(d => d.Year),
    datasets: [
      {
        label: 'Glacier Mass Balance',
        data: glacierData.map(d => d["Mean cumulative mass balance"]),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, labels: { color: 'white' } },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `År: ${tooltipItem.label}, Förlust: ${tooltipItem.raw} m`;
          },
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: 'År', color: 'white' },
        ticks: { color: 'white' },
      },
      y: {
        title: { display: true, text: 'Kumulativ massa (m)', color: 'white' },
        ticks: { color: 'white' },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuad',
    },
  };

  return (
    <div style={{ background: '#111', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Glaciärens Smältning Över Tid</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default GlacierChart;
