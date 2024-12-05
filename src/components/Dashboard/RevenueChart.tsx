"use client";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
import dashboardData from "@/data/dashboardData.json"; 


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const RevenueChart = () => {
    const { revenueChartData } = dashboardData;

    // Define chart options
    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false, 
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Month",
                    font: {
                        size: 14,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Value (Rs)",
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    return <Line data={revenueChartData} options={options} />;
};

export default RevenueChart;
