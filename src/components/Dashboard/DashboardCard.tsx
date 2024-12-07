"use client";
import { FC } from "react";

interface DashboardCardProps {
    title: any;
    value: any;
    change: any;
    positive: boolean;
}

const DashboardCard: FC<DashboardCardProps> = ({ title, value, change, positive }) => (
    <div className="p-4 bg-white shadow rounded-md min-w-64">
        <h4 className="text-gray-700 text-md">{title}</h4>
        <p className="text-xl font-bold">{value}</p>
        <p className={`text-sm ${positive ? "text-green-500" : "text-red-500"}`}>
            {positive ? "+" : "-"}{change} From Last Month
        </p>
    </div>
);

export default DashboardCard;
