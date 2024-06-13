import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from './activityChart.module.css';

const ActivityChart = () => {
    const data = {
        labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
        datasets: [
            {
                label: 'Số việc',
                data: [0, 2, 1, 4, 6, 3, 2],
                borderColor: '#000',
                backgroundColor: 'rgba(96, 93, 236, 0.2)',
                pointBackgroundColor: '#605DEC',
                pointBorderColor: '#605DEC',
                pointHoverBackgroundColor: '#605DEC',
                pointHoverBorderColor: '#605DEC',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: () => '',
                    label: (context) => `${context.raw} Công việc`,
                },
                backgroundColor: '#1E1E1E',
                titleFont: {
                    size: 14,
                },
                bodyFont: {
                    size: 14,
                },
                displayColors: false,
                yAlign: 'bottom',
                xAlign: 'center',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
        layout: {
            padding: {
                top: 20,
                bottom: 0,
                left: 10,
                right: 10,
            },
        },
    };

    return (
        <div className={styles.chartContainer}>
            <div className={styles.header}>
                <h3>Hoạt động</h3>
                <div>Tuần này</div>
            </div>
            <Line data={data} options={options} />
        </div>
    );
};

export default ActivityChart;
