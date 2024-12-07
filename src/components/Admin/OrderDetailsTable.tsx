
"use client";

import { useState, useEffect } from "react";
import ProductTableWithPagi from "@/components/Table/TableWithPagi";
import { orderColumns } from "@/components/Table/Columns";
import ordersData from "@/data/orders.json";
import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
import OrderPopup from "@/components/Admin/OrderDetailsPopup";
//import OrderPopup from "@/components/Admin/OrderDetailsPopup";
import { Order } from "@/components/Table/Columns";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

const OrderDetailsTable = () => {
    const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);
    const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [filteredData, setFilteredData] = useState<Order[]>([]);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

    useEffect(() => {
        const transformedData = ordersData.ordersData.map((order) => ({
            orderId: order.orderId,
            productName: order.productName,
            quantity: order.quantity,
            price: order.price,
            date: order.date,
            fullName: order.receiver.fullName || "Unknown", // Provide a fallback value
            district: order.receiver.district,
            address: `${order.receiver.street}, ${order.receiver.province}`, // Combine fields if needed
            postalCode: "N/A", // Add default or placeholder values if necessary
            contactNo: order.receiver.mobile,
            orderStatus: order.orderStatus,
        }));
        setFilteredData(transformedData);
    }, []);

    // const handleDelete = (admin: Order) => {
    //     if (admin) {
    //         setSelectedAdmin(admin);
    //         setIsDeleteConfirmPopupOpen(true);
    //     }
    // };


    const handleOrderStatusChange = (newStatus: string) => {
        if (selectedOrder) {
            const updatedOrder = { ...selectedOrder, orderStatus: newStatus };
            setSelectedOrder(updatedOrder);

            // Update the filtered data array with the new status
            setFilteredData((prevData) =>
                prevData.map((order) =>
                    order.orderId === selectedOrder.orderId ? updatedOrder : order
                )
            );

            // Optionally send the status update to the server
            updateOrderStatusOnServer(selectedOrder.orderId, newStatus);
        }
    };

    const updateOrderStatusOnServer = async (orderId: number, newStatus: string) => {
        try {
            await axios.patch(`/api/orders/${orderId}`, { status: newStatus });
            alert("Order status updated successfully!");
        } catch (error) {
            console.error("Failed to update order status:", error);
            alert("Failed to update order status.");
        }
    };


    // const handleEdit = (admin: Order) => {
    //     if (admin) {
    //         setSelectedOrder(admin);
    //         setIsDeleteConfirmPopupOpen(true);
    //     }
    // };

    const handleEdit = (order: Order) => {
        if (order) {
            setSelectedOrder(order); // Set the selected order details
            setIsOrderPopupOpen(true); // Open the edit popup
        }
    };

    const handleAddAdmin = (newAdmin: Order) => {
        setFilteredData((prevData) => [...prevData, newAdmin]);
    };

    return (
        <>
            <div className="flex justify-between mb-3 mt-6">
                <h5 className="flex items-center font-semibold font-inter ml-[120px]">Order Details</h5>
            </div>

            {/* Pass the filtered data to the table */}
            <ProductTableWithPagi<Order>
                columns={orderColumns}
                data={filteredData}
                itemsPerPage={15}
                className="custom-table-class"
                //handleDelete={handleDelete}
                handleEdit={handleEdit}
                getRowId={(row) => row.orderId}
            //handleEdit={() => { }}

            //     handlers={{
            //         view: (row) => console.log("Viewing row:", row), // Pass the view handler
            //       }}
            // handleRowClick={handleRowClick}
            />

            {/* {isOrderPopupOpen && (
                <OrderPopup
                    isOpen={isOrderPopupOpen}
                    setIsOrderPopupOpen={setIsOrderPopupOpen}
                    onAddAdmin={handleAddAdmin}
                />
            )} */}

            {/* {isDeleteConfirmPopupOpen && selectedAdmin && (
                <DeleteConfirm
                    element={selectedAdmin?.orderId}
                    onDelete={() => {
                        setFilteredData((prevData) =>
                            prevData.filter((admin) => admin.orderId !== selectedAdmin.orderId)
                        );
                        setIsDeleteConfirmPopupOpen(false);
                    }}
                    onCancel={() => setIsDeleteConfirmPopupOpen(false)}
                    isVisible={isDeleteConfirmPopupOpen}
                />
            )} */}

            {/* Order Popup */}
            {isOrderPopupOpen && selectedOrder && (
                <OrderPopup
                    isOpen={isOrderPopupOpen}
                    onClose={() => setIsOrderPopupOpen(false)}
                    title={`Order ID: ${selectedOrder.orderId} - ${selectedOrder.productName}`}
                    description="Manage the details of the selected order."
                >
                    {/* Order details */}
                    {/* Dropdown Section */}
                    <div className="flex justify-end mt-6"> {/* Flexbox to align right */}
                        <select
                            className="border border-gray-300 rounded px-4 py-2 w-auto"
                            value={selectedOrder.orderStatus}
                            onChange={(e) => handleOrderStatusChange(e.target.value)}
                        >
                            <option value="confirmed">Confirmed</option>
                            <option value="shipped">Shipped</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="font-semibold">Order Details</h5>
                        <p>Quantity: {selectedOrder.quantity}</p>
                        <p>Price: {selectedOrder.price}</p>
                        <p>Date: {selectedOrder.date}</p>
                    </div>

                    {/* Receiver details */}
                    <div className="mt-4">
                        <h5 className="font-semibold">Receiver Details</h5>
                        <p>Name: {selectedOrder.fullName}</p>
                        <p>Address: {selectedOrder.address}</p>
                        <p>District: {selectedOrder.district}</p>
                        <p>Contact No: {selectedOrder.contactNo}</p>
                    </div>
                </OrderPopup>
            )}

            {/* Delete Confirmation Popup */}
            {isDeleteConfirmPopupOpen && selectedOrder && (
                <DeleteConfirm
                    element={selectedOrder?.orderId}
                    onDelete={() => {
                        setFilteredData((prevData) =>
                            prevData.filter((order) => order.orderId !== selectedOrder.orderId)
                        );
                        setIsDeleteConfirmPopupOpen(false);
                    }}
                    onCancel={() => setIsDeleteConfirmPopupOpen(false)}
                    isVisible={isDeleteConfirmPopupOpen}
                />
            )}
        </>
    );


};

export default OrderDetailsTable;
