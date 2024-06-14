import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: ['Tốt/Xuất sắc', 'Khá', 'Tệ'],
    datasets: [
      {
        data: [58, 22, 20],
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
        hoverBackgroundColor: ['#66BB6A', '#FFCA28', '#EF5350'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 14,  
          }
        },
      },
      title: {
        display: true,
        text: 'Thống kê công việc theo KPI',
        font: {
          size: 15, 
          weight: 'bold' 
        }
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
      datalabels: {
        color: '#fff',
        formatter: (value, context) => {
          let sum = 0;
          const dataArr = context.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
            return null;
          });
          const percentage = ((value / sum) * 100).toFixed(2) + '%';
          return percentage;
        },
        font: {
          weight: 'bold'
        }
      },
    },
  };

  return (
    <div style={{ maxWidth: '350px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
