'use client';
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const OrderDetailsPage: React.FC = () => {
    //const router = useRouter();

    // State for the current status
    const [status, setStatus] = useState<string>("Pending");

    // Sample data
    const orderDetails = {
        orderId: "12345",
        orderDate: "2024-11-15",
        productName: "Product A",
        price: 200,
        orderedQuantity: 3,
        totalPayment: 600,
    };

    const receiverDetails = {
        name: "John Doe",
        streetAddress: "123 Main Street",
        district: "Colombo",
        province: "Western",
        mobileNumber: "+94712345678",
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 border border-gray-300 rounded-md shadow-md">
            {/* Back Button */}
            <button
                className="flex items-center text-blue-500 hover:text-blue-700 mb-6"
            //onClick={() => router.push("/admin/orderDetails")}
            >
                <FaArrowLeft className="mr-2" />
                Back to Orders
            </button>

            {/* Order Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Order Details</h1>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() =>
                        setStatus((prev) =>
                            prev === "Pending" ? "Shipping" : prev === "Shipping" ? "Delivered" : "Pending"
                        )
                    }
                >
                    Change Status: {status}
                </button>
            </div>

            {/* Order Details Section */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Order Details</h2>
                <div className="space-y-2">
                    <p>
                        <strong>Order ID:</strong> {orderDetails.orderId}
                    </p>
                    <p>
                        <strong>Order Date:</strong> {orderDetails.orderDate}
                    </p>
                    <p>
                        <strong>Product:</strong> {orderDetails.productName}
                    </p>
                    <p>
                        <strong>Price:</strong> ${orderDetails.price}
                    </p>
                    <p>
                        <strong>Ordered Quantity:</strong> {orderDetails.orderedQuantity}
                    </p>
                    <p>
                        <strong>Total Payment:</strong> ${orderDetails.totalPayment}
                    </p>
                </div>
            </div>

            {/* Order Receiver Details Section */}
            <div>
                <h2 className="text-xl font-semibold mb-2">Order Receiver Details</h2>
                <div className="space-y-2">
                    <p>
                        <strong>Name:</strong> {receiverDetails.name}
                    </p>
                    <p>
                        <strong>Street Address:</strong> {receiverDetails.streetAddress}
                    </p>
                    <p>
                        <strong>District:</strong> {receiverDetails.district}
                    </p>
                    <p>
                        <strong>Province:</strong> {receiverDetails.province}
                    </p>
                    <p>
                        <strong>Mobile Number:</strong> {receiverDetails.mobileNumber}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsPage;
