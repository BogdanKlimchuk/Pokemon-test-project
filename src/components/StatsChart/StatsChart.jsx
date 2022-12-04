import React from 'react';
import classes from "../StatsChart/StatsChart.module.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const StatsChart = ({stats}) => {
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
        },
    }

    const labels = stats.map((item)=> item.stat.name.charAt(0).toUpperCase() + item.stat.name.substring(1))

     const data = {
        labels,
        datasets: [
            {
                data: stats.map((item)=> item.base_stat),
                backgroundColor: ['#78C850BE', '#C03028BE', '#6890F0BE', '#F08030BE', '#A890F0BE', '#98D8D8BE'],
            }
        ],
    }
    return (
        <div className={classes.chartContainer}>
            <Bar options={options} data={data}/>
        </div>
    )
};

export default StatsChart;