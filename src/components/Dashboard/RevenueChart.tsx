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
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getMonthlyTotals } from "@/apis/adminApi/admin";
import Dropdown from "../Dropdown/Dropdown";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface MonthlyTotal {
    year: number;
    month: number;
    totalPrice: number;
}

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}

const RevenueChart = () => {
    const [revenueChartData, setRevenueChartData] = useState<{
        [year: string]: ChartData;
    }>({});
    const [selectedYear, setSelectedYear] = useState<string>("2024");

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMonthlyTotals();
            processChartData(data);
        };

        fetchData();
    }, []);

    // Process the API data into Chart.js format
    const processChartData = (data: MonthlyTotal[]) => {
        const chartDataByYear: { [year: string]: ChartData } = {};

        data.forEach(({ year, month, totalPrice }) => {
            const yearString = year.toString();

            if (!chartDataByYear[yearString]) {
                chartDataByYear[yearString] = {
                    labels: Array.from({ length: 12 }, (_, i) =>
                        new Date(0, i).toLocaleString("default", { month: "short" })
                    ),
                    datasets: [
                        {
                            label: "Revenue",
                            data: Array(12).fill(0),
                            borderColor: "rgba(75, 192, 192, 1)",
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                        },
                    ],
                };
            }

            chartDataByYear[yearString].datasets[0].data[month - 1] = totalPrice;
        });

        setRevenueChartData(chartDataByYear);
    };

    // Dropdown change handler
    const handleYearChange = (value: string) => {
        setSelectedYear(value);
    };

    // Chart.js options
    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "top",
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
                    text: "Revenue (Rs)",
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    // Extract years for the dropdown options
    const yearOptions = Object.keys(revenueChartData).map((year) => ({
        label: year,
        value: year,
    }));

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                <Dropdown
                    width="150px"
                    placeholder="Select Year"
                    options={yearOptions}
                    value={selectedYear}
                    onChange={handleYearChange}
                />
            </div>
            {revenueChartData[selectedYear] && Object.keys(revenueChartData).length > 0 ? (
                <Line data={revenueChartData[selectedYear]} options={options} />
            ) : null}
        </div>
    );
};

export default RevenueChart;
