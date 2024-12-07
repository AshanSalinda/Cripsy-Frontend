"use client";
import { FC } from "react";

interface DashboardCardProps {
    id: string;
    title: string;
    value: string;
    difference: number;
}

const DashboardCard: FC<DashboardCardProps> = ({ title, value, difference }) => {
    const isPositive = difference > 0;

    return (
        <div className="p-4 bg-white shadow rounded-md min-w-64">
            <h4 className="text-gray-700 text-md">{title}</h4>
            <p className="text-xl font-bold">{value}</p>
            <p className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
                {isPositive ? "+" : "-"}{Math.abs(difference)}% From Last Month
            </p>
        </div>
    );
};

export default DashboardCard;
