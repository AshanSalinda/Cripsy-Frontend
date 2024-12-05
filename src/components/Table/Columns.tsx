"use client";
import {FaEdit, FaTrash} from 'react-icons/fa';
import { FaRegEdit } from "react-icons/fa";



// Interfaces
export interface Branch {
    branchId: string;
    branchName: string;
    address: string;
    email: string;
    contactNo: string;
}

export interface Product {
    productId: number;
    name: string;
    description: string;
    stock: number;
    category:number;
    price: number;
    discount: number;
}

// Admin Interface
export interface Admin {
    adminId: string; // Or number, depending on your DB schema
    adminName: string;
    email: string;
    contactNo: string;
    firstName: string;
    lastName: string;
    gender: "Male" | "Female"; // Define gender
    birthday: string; // Format it accordingly, e.g., YYYY-MM-DD
  }
// order interface
export interface Order {
    orderId: string;
    fullName: string;
    district: string;
    address: string;
    postalCode: string;
    contactNo: string;
}

// Column Type Definition
type Column<T> = {
    header: string;
    accessor: keyof T;
    render?: (
        value: T[keyof T] | undefined,
        row: T,
        handlers?: Record<string, (row: T) => void>
    ) => React.ReactNode;
};

// Refund interface
export interface Refund {
    orderId: string;
    customerName: string;
    refundItemQty: number;
    refundAmount: number;
}


// Branch Columns
export const branchColumns: Column<Branch>[] = [
    { header: "Branch ID", accessor: "branchId" },
    { header: "Branch Name", accessor: "branchName" },
    { header: "Email", accessor: "email" },
    { header: "Contact No", accessor: "contactNo" },
    {
        header: "Action",
        accessor: "action" as keyof Branch,
        render: (_value, row, handlers) => (
            <div className="flex space-x-4">
                <FaTrash
                    className="text-gray-400 hover:text-red-700 cursor-pointer"
                    onClick={() => handlers?.delete(row)}
                    aria-label="Delete Branch"
                />
            </div>
        ),
    },
];

// Product Columns
export const productColumns: Column<Product>[] = [
    { header: "Product ID", accessor: "productId" },
    { header: "Product Name", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Stock", accessor: "stock" },
    { header: "Price", accessor: "price" },
    { header: "CategoryId", accessor: "category" },
    { header: "Discount", accessor: "discount" },
    {
        header: "Action",
        accessor: "action" as keyof Product,
        render: (_value, row, handlers) => (
            <div className="flex space-x-4">
                <FaEdit
                    className="text-gray-400 hover:text-blue-600 cursor-pointer"
                    onClick={() => handlers?.edit(row)} // Pass the row data to the edit handler
                    aria-label="Edit Product"
                />
                <FaTrash
                    className="text-gray-400 hover:text-red-700 cursor-pointer"
                    onClick={() => handlers?.delete(row)} // Pass the row data to the delete handler
                    aria-label="Delete Product"
                />
            </div>
        ),
    },
];

// Admin Columns
export const adminColumns: Column<Admin>[] = [
    { header: "Admin ID", accessor: "adminId" },
    { header: "Admin Name", accessor: "adminName" },
    { header: "Email", accessor: "email" },
    { header: "Contact No", accessor: "contactNo" },
    {
        header: "Action",
        accessor: "action" as keyof Admin,
        render: (_value, row, handlers) => (
            <div className="flex space-x-4">
                <FaTrash
                    className="text-gray-400 hover:text-red-700 cursor-pointer"
                    onClick={() => handlers?.delete(row)}
                    aria-label="Delete Admin"
                />
            </div>
        ),
    },
];


//order details table
export const orderColumns: Column<Order>[] = [
    { header: "Full Name", accessor: "fullName" },
    { header: "District", accessor: "district" },
    { header: "Postal Code", accessor: "postalCode" },
    { header: "Contact No", accessor: "contactNo" },
    {
        header: "Action",
        accessor: "action" as keyof Order,
        render: (_value, row, handlers) => (
            <div className="flex space-x-4">
                <FaRegEdit
                    className="text-gray-400 hover:text-black cursor-pointer"
                    onClick={() => handlers?.edit(row)}
                    aria-label="Edit Order"
                />
            </div>
        ),
    },
];

//Refund Details Table
export const refundColumns: Column<Refund>[] = [
    { header: "Order ID", accessor: "orderId" },
    { header: "Customer Name", accessor: "customerName" },
    { header: "Refund Item Qty", accessor: "refundItemQty" },
    { header: "Refund Amount", accessor: "refundAmount" },
    {
        header: "Action",
        accessor: "action" as keyof Refund,
        render: (_value, row, handlers) => (
            <div className="flex space-x-4">
                <FaRegEdit
                    className="text-gray-400 hover:text-black cursor-pointer"
                    onClick={() => handlers?.edit(row)}
                    aria-label="Action Refund"
                />
            </div>
        ),
    }
];


//Admin Dashboard TopSelling Table
export interface TopSellingTableProps {
    id: number;
    itemName: string;
    description: string;
    qty: number;
    rate: string;
    value: string;
}
export const TopSellingTableColumns: Column<TopSellingTableProps>[] = [
    { header: "#", accessor: "id" },
    { header: "ITEM NAME", accessor: "itemName" },
    { header: "DESCRIPTION", accessor: "description" },
    { header: "QTY", accessor: "qty" },
    { header: "RATE (RS)", accessor: "rate" },
    { header: "VALUE (RS)", accessor: "value" },
];
