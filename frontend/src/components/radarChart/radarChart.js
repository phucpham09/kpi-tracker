import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title);

const RadarChart = () => {
  const data = {
    labels: ['Lập trình', 'Tiếng Nhật', 'Kỹ năng Mềm', 'Thể dục', 'Tiếng Anh'],
    datasets: [
      {
        label: '<50%',
        data: [3, 5, 2, 3, 4],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: '>50%',
        data: [4, 3, 4, 5, 6],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true, min: 0, max: 5, stepSize: 1 },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true, 
          pointStyle: 'rect',
          font: {
            size: 14, 
          },
        },
      },
      title: {
        display: true,
        text: 'Thống kê công việc theo tỉ lệ hoàn thành',
        font: {
          size: 15,
          weight: 'bold', 
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '350px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
