"use client";
import React, { useState } from "react";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import dashboardData from "@/data/dashboardData.json";
import RevenueChart from "@/components/Dashboard/RevenueChart";
import SalePieChart from "@/components/Dashboard/SalePieChart";
import TableWithPagi from "@/components/Table/TableWithPagi";
import { TopSellingTableColumns } from "@/components/Table/Columns";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import { FiX } from "react-icons/fi";

function Page() {
    const currentDate = new Date().toISOString().split("T")[0];

    const topSellingItemsTableData = dashboardData.topSellingItemsTableData;

    const tableData = topSellingItemsTableData.map((row, index) => ({
        id: index + 1,
        ...row,
    }));

    const [selectedDate, setSelectedDate] = useState<string>(currentDate);

    const handleDateChange = (date: string) => {
        setSelectedDate(date);
    };

    const resetToCurrentDate = () => {
        setSelectedDate(currentDate);
    };

    return (
        <>
            <div className="p-2 mt-2">
                {/* Dashboard Cards */}
                <div className="flex gap-3 justify-between">
                    {dashboardData.dashboardCardData.map((card, index) => (
                        <DashboardCard
                            key={index}
                            title={card.title}
                            value={card.value}
                            change={card.change}
                            positive={card.positive}
                        />
                    ))}
                </div>

                {/* Revenue and Pie Chart */}
                <div className="flex gap-4 max-w-full mt-6">
                    <div className="bg-white rounded-md shadow w-1/2 p-4">
                        <h3 className="text-lg font-semibold mb-1">Revenue</h3>
                        <RevenueChart />
                    </div>
                    <div className="bg-white rounded-md shadow w-1/2 p-4">
                        <h3 className="text-lg font-semibold mb-1">Sale By Location</h3>
                        <SalePieChart />
                    </div>
                </div>

                {/* Top Selling Table */}
                <div className="p-4 w-full bg-white rounded-md shadow mt-6">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Top Selling Items</h3>
                        <div className="flex gap-3 items-center">
                            {/* Date Picker */}
                            <DatePicker
                                defaultDate={selectedDate}
                                onDateChange={handleDateChange}
                                width="w-44"
                            />
                            {/* Clear Button */}
                            {selectedDate !== currentDate && (
                                <button
                                    onClick={resetToCurrentDate}
                                    className="cursor-pointer w-8 h-8 bg-slate-50 rounded-full p-2 hover:bg-red-500 hover:text-white border shadow flex items-center justify-center"
                                    aria-label="Clear Date"
                                >
                                    <FiX />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="p-2">
                        <TableWithPagi
                            columns={TopSellingTableColumns}
                            data={tableData}
                            itemsPerPage={10}
                            className="custom-table-class"
                            getRowId={(row) => row.id}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
