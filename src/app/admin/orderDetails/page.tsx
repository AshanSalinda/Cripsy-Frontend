// 'use client';
// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"


// type Order = {
//     orderId: string;
//     productName: string;
//     quantity: number;
//     price: number;
//     date: string;
// };

// const OrderTable: React.FC = () => {
//     const [orders, setOrders] = useState<Order[]>([
//         {
//             orderId: "123",
//             productName: "Product A",
//             quantity: 2,
//             price: 200,
//             date: "2024-11-15",
//         },
//         {
//             orderId: "124",
//             productName: "Product B",
//             quantity: 1,
//             price: 150,
//             date: "2024-11-16",
//         },
//     ]);

//     return (
//         <Table className="w-full">
//             <TableHeader>
//                 <TableRow>
//                     <TableCell>Order ID</TableCell>
//                     <TableCell>Product Name</TableCell>
//                     <TableCell>Quantity</TableCell>
//                     <TableCell>Price</TableCell>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Action</TableCell>
//                 </TableRow>
//             </TableHeader>
//             <TableBody>
//                 {orders.map((order, index) => (
//                     <TableRow key={index} className="hover:bg-gray-50">
//                         <TableCell>{order.orderId}</TableCell>
//                         <TableCell>{order.productName}</TableCell>
//                         <TableCell>{order.quantity}</TableCell>
//                         <TableCell>{order.price}</TableCell>
//                         <TableCell>{order.date}</TableCell>
//                         <TableCell className="text-center">
//                             <button
//                                 className="text-blue-500 hover:text-blue-700"
//                                 onClick={() => alert(`Viewing details for Order ID: ${order.orderId}`)}
//                             >
//                                 <FaEye />
//                             </button>
//                         </TableCell>
//                     </TableRow>
//                 ))}
//             </TableBody>
//         </Table>
//     );
// };

// export default OrderTable;

import React from 'react'
import OrderDetailsTable from '@/components/Admin/OrderDetailsTable';


const Page = () => {
    return (
        <div>
            <OrderDetailsTable />
        </div>
    )
}

export default Page
