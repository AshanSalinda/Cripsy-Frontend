"use client";
import React, { useState, useEffect } from "react";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import RevenueChart from "@/components/Dashboard/RevenueChart";
import SalePieChart from "@/components/Dashboard/SalePieChart";
import TableWithPagi from "@/components/Table/TableWithPagi";
import { TopSellingTableColumns } from "@/components/Table/Columns";
import { getMonthlySumQty, getOrderSummary, getTotalCustomer, getMonthlySumTotal, getBestSelling } from "@/apis/adminApi/admin";

// Interfaces for the data
interface MonthlyData {
    percentageDifference: number;
    thisMonthQuantity: number;
    lastMonthQuantity: number;
}

interface OrderData {
    percentageDifference: number;
    thisMonthOrders: number;
    lastMonthOrders: number;
}

interface RevenueData {
    percentageDifference: number;
    thisMonthTotalPrice: number;
    lastMonthTotalPrice: number;
}

interface TopSellingTableProps {
    id: number;
    productId: number;
    name: string;
    avgRatings: number;
    totalQuantity: number;
    rate: number;
    totalPrice: number;
}

const Page = () => {
    const [itemData, setItemData] = useState<MonthlyData | null>(null);
    const [orderData, setOrderData] = useState<OrderData | null>(null);
    const [revenueData, setRevenueData] = useState<RevenueData | null>(null);
    const [customerData, setCustomerData] = useState<number | null>(null);
    const [bestSellingData, setBestSellingData] = useState<TopSellingTableProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [itemRes, orderRes, revenueRes, customerRes, bestSellingRes] = await Promise.all([
                    getMonthlySumQty(),
                    getOrderSummary(),
                    getMonthlySumTotal(),
                    getTotalCustomer(),
                    getBestSelling(),
                ]);

                // Set state with fetched data
                setItemData(itemRes[0] || { percentageDifference: 0, thisMonthQuantity: 0, lastMonthQuantity: 0 });
                setOrderData(orderRes[0] || { percentageDifference: 0, thisMonthOrders: 0, lastMonthOrders: 0 });
                setRevenueData(revenueRes[0] || { percentageDifference: 0, thisMonthTotalPrice: 0, lastMonthTotalPrice: 0 });
                setCustomerData(customerRes ?? 0);

                // Map `bestSellingRes` to `TopSellingTableProps`
                const transformedBestSellingData: TopSellingTableProps[] = bestSellingRes.map((item, index) => ({
                    id: index + 1,
                    productId: item.productId,
                    name: item.name,
                    avgRatings: item.avgRatings,
                    totalQuantity: item.totalQuantity,
                    rate: item.totalDiscountedPrice,
                    totalPrice: item.totalPrice,
                }));

                setBestSellingData(transformedBestSellingData);

            } catch (error) {
                console.error("Error fetching dashboard data:", error);

                // Fallback values in case of error
                setItemData({ percentageDifference: 0, thisMonthQuantity: 0, lastMonthQuantity: 0 });
                setOrderData({ percentageDifference: 0, thisMonthOrders: 0, lastMonthOrders: 0 });
                setRevenueData({ percentageDifference: 0, thisMonthTotalPrice: 0, lastMonthTotalPrice: 0 });
                setCustomerData(0);
                setBestSellingData([]);
            }
        };

        fetchData();
    }, []);

    const validItemData = itemData || { percentageDifference: 0, thisMonthQuantity: 0, lastMonthQuantity: 0 };
    const validOrderData = orderData || { percentageDifference: 0, thisMonthOrders: 0, lastMonthOrders: 0 };
    const validRevenueData = revenueData || { percentageDifference: 0, thisMonthTotalPrice: 0, lastMonthTotalPrice: 0 };
    const validCustomerData = customerData ?? 0;

    return (
        <div className="p-2 mt-2">
            {/* Dashboard Cards */}
            <div className="flex gap-3 justify-between">
                <DashboardCard
                    id="totalItems"
                    title="Total Items"
                    value={validItemData.thisMonthQuantity.toLocaleString()}
                    difference={validItemData.percentageDifference}
                />
                <DashboardCard
                    id="totalOrders"
                    title="Total Orders"
                    value={validOrderData.thisMonthOrders.toLocaleString()}
                    difference={validOrderData.percentageDifference}
                />
                <DashboardCard
                    id="totalRevenue"
                    title="Total Revenue"
                    value={`Rs ${validRevenueData.thisMonthTotalPrice.toLocaleString()}`}
                    difference={validRevenueData.percentageDifference}
                />
                <DashboardCard
                    id="totalCustomers"
                    title="Total Customers"
                    value={validCustomerData.toLocaleString()}
                    difference={0}
                />
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

            {/* Best Selling Table */}
            <div className="p-4 w-full bg-white rounded-md shadow mt-6">
                <div className="mb-3">
                    <h3 className="text-lg font-semibold">Best Selling</h3>
                </div>
                <div className="p-2">
                    <TableWithPagi
                        columns={TopSellingTableColumns}
                        data={bestSellingData}
                        itemsPerPage={5}
                        className="custom-table-class"
                        getRowId={(row) => row.id}
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;
