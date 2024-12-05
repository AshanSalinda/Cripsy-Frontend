"use client";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import dashboardData from "@/data/dashboardData.json"; 

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const SalePieChart = () => {
    // Get the pie chart data from the JSON file
    const { salePieChartData } = dashboardData;

    const options: ChartOptions<"pie"> = {
        responsive: true,
        maintainAspectRatio: false, // Allow custom sizing
    };

    return (
        <div style={{ maxWidth: "250px", height: "250px", display: "flex", justifyContent: "center", margin:"0 auto" }}>
            <Pie data={salePieChartData} options={options} />
        </div>
    );
};

export default SalePieChart;
