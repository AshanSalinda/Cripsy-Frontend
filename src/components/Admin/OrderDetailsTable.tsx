// "use client";
// import { useState, useEffect } from "react";
// import ProductTableWithPagi from "@/components/Table/ProductTableWithPagi";
// import { orderColumns } from "@/components/Table/Columns";
// import adminData from "@/data/adminData.json";
// import CustomButton from "@/components/Button/CustomButton";
// import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
// import AddNewAdmin from "@/components/Admin/AddNewAdmin";
// import { Admin } from "@/components/Table/Columns";

// const AdminDetailsTable = () => {
//     const [isNewAdminPopupOpen, setIsNewAdminPopupOpen] = useState(false);
//     const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
//     const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
//     const [filteredData, setFilteredData] = useState<Admin[]>([]);

//     useEffect(() => {
//         setFilteredData(adminData?.adminData || []);
//     }, []);

//     const handleDelete = (admin: Admin) => {
//         if (admin) {
//             setSelectedAdmin(admin);
//             setIsDeleteConfirmPopupOpen(true);
//         }
//     };

//     const handleAddAdmin = (newAdmin: Admin) => {
//         setFilteredData((prevData) => [...prevData, newAdmin]);
//     };

//     return (
//         <>
//             <div className="flex justify-between mb-3 mt-6">
//                 <h5 className="flex items-center font-semibold font-inter ml-[120px]">Admin Details</h5>
//                 <CustomButton
//                     onClick={() => setIsNewAdminPopupOpen(true)}
//                     buttonLabel="New Admin"
//                     buttonClassName="text"
//                 />
//             </div>

//             <ProductTableWithPagi<Admin>
//                 columns={adminColumns}
//                 data={filteredData}
//                 itemsPerPage={15}
//                 className="custom-table-class"
//                 handleDelete={handleDelete}
//                 getRowId={(row) => row.adminId}
//                 handleEdit={() => {}}
//             />

//             {isNewAdminPopupOpen && (
//                 <AddNewAdmin
//                     isDialogOpen={isNewAdminPopupOpen}
//                     setIsDialogOpen={setIsNewAdminPopupOpen}
//                     onAddAdmin={handleAddAdmin}
//                 />
//             )}

//             {isDeleteConfirmPopupOpen && selectedAdmin && (
//                 <DeleteConfirm
//                     element={selectedAdmin?.adminName}
//                     onDelete={() => {
//                         setFilteredData((prevData) =>
//                             prevData.filter((admin) => admin.adminId !== selectedAdmin.adminId)
//                         );
//                         setIsDeleteConfirmPopupOpen(false);
//                     }}
//                     onCancel={() => setIsDeleteConfirmPopupOpen(false)}
//                     isVisible={isDeleteConfirmPopupOpen}
//                 />
//             )}
//         </>
//     );
// };

// export default AdminDetailsTable;


// "use client";
// import { useState, useEffect } from "react";
// import ProductTableWithPagi from "@/components/Table/ProductTableWithPagi";
// import { orderColumns } from "@/components/Table/Columns";
// import ordersData from "@/data/orders.json";
// import CustomButton from "@/components/Button/CustomButton";
// import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
// import AddNewAdmin from "@/components/Admin/AddNewAdmin";
// import { Order } from "@/components/Table/Columns";

// const OrderDetailsTable = () => {
//     const [isNewAdminPopupOpen, setIsNewAdminPopupOpen] = useState(false);
//     const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
//     const [selectedAdmin, setSelectedAdmin] = useState<Order | null>(null);
//     const [filteredData, setFilteredData] = useState<Order[]>([]);

//     // useEffect(() => {
//     //     setFilteredData(ordersData?.ordersData || []);
//     // }, []);

//     // useEffect(() => {
//     //     setFilteredData(ordersData || []);
//     // }, [ordersData]);

//     const Order = ({ ordersData }: { ordersData: { ordersData: Order[] } }) => {
//         const [filteredData, setFilteredData] = useState<Order[]>([]);

//         useEffect(() => {
//             // Access the array of orders correctly
//             setFilteredData(ordersData.ordersData || []);
//         }, [ordersData]);


//         const handleDelete = (admin: Order) => {
//             if (admin) {
//                 setSelectedAdmin(admin);
//                 setIsDeleteConfirmPopupOpen(true);
//             }
//         };

//         const handleAddAdmin = (newAdmin: Order) => {
//             setFilteredData((prevData) => [...prevData, newAdmin]);
//         };
//     }

//     return (
//         <>
//             <div className="flex justify-between mb-3 mt-6">
//                 <h5 className="flex items-center font-semibold font-inter ml-[120px]">Order Details</h5>
//                 <CustomButton
//                     onClick={() => setIsNewAdminPopupOpen(true)}
//                     buttonLabel="New Admin"
//                     buttonClassName="text"
//                 />
//             </div>



//             <ProductTableWithPagi<Order>
//                 columns={orderColumns}
//                 data={filteredData}
//                 itemsPerPage={15}
//                 className="custom-table-class"
//                 //handleDelete={handleDelete}
//                 getRowId={(row) => row.orderId}
//                 handleEdit={() => { }}
//             />

//             {/* {isNewAdminPopupOpen && (
//                 <AddNewAdmin
//                     isDialogOpen={isNewAdminPopupOpen}
//                     setIsDialogOpen={setIsNewAdminPopupOpen}
//                     onAddAdmin={handleAddAdmin}
//                 />
//             )} */}

//             {/* {isDeleteConfirmPopupOpen && selectedAdmin && (
//                 <DeleteConfirm
//                     element={selectedAdmin?.adminName}
//                     onDelete={() => {
//                         setFilteredData((prevData) =>
//                             prevData.filter((admin) => admin.adminId !== selectedAdmin.adminId)
//                         );
//                         setIsDeleteConfirmPopupOpen(false);
//                     }}
//                     onCancel={() => setIsDeleteConfirmPopupOpen(false)}
//                     isVisible={isDeleteConfirmPopupOpen}
//                 />
//             )} */}
//         </>
//     );
// };

// export default OrderDetailsTable;

"use client";

import { useState, useEffect } from "react";
import ProductTableWithPagi from "@/components/Table/ProductTableWithPagi";
import { orderColumns } from "@/components/Table/Columns";
import ordersData from "@/data/orders.json"; // Import JSON data
import CustomButton from "@/components/Button/CustomButton";
import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
import OrderPopup from "@/components/Admin/OrderDetailsPopup";
//import OrderPopup from "@/components/Admin/OrderDetailsPopup";
import { Order } from "@/components/Table/Columns";
import { FaRegEdit } from "react-icons/fa";

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
        }));
        setFilteredData(transformedData);
    }, []);

    // const handleDelete = (admin: Order) => {
    //     if (admin) {
    //         setSelectedAdmin(admin);
    //         setIsDeleteConfirmPopupOpen(true);
    //     }
    // };

    const handleRowClick = (order: Order) => {
        setSelectedOrder(order); // Set the selected order data
        setIsOrderPopupOpen(true); // Open the popup
    };

    const handleDelete = (admin: Order) => {
        if (admin) {
            setSelectedOrder(admin);
            setIsDeleteConfirmPopupOpen(true);
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


// "use client";
// import { useState, useEffect } from "react";
// import ProductTableWithPagi from "@/components/Table/ProductTableWithPagi";
// import { orderColumns } from "@/components/Table/Columns";
// import OrdersData from "@/data/orders.json"; // Assuming orders.json contains the data
// import OrderDetailsPopup from "@/components/Admin/OrderDetailsPopup"; // Create this component for order details
// import { Order } from "@/components/Table/Columns";

// const OrdersTable = () => {
//     const [OrdersData, setOrders] = useState<Order[]>([]);
//     const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
//     const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);

//     useEffect(() => {
//         setOrders(OrdersData?.orderId || []); // Assuming `orders` is the key in the JSON
//     }, []);

//     const handleRowClick = (order: Order) => {
//         setSelectedOrder(order);
//         setIsOrderPopupOpen(true);
//     };

//     return (
//         <>
//             <div className="flex justify-between mb-3 mt-6">
//                 <h5 className="flex items-center font-semibold font-inter ml-[120px]">Order Details</h5>
//             </div>

//             <ProductTableWithPagi<Order>
//                 columns={orderColumns}
//                 data={orders}
//                 itemsPerPage={15}
//                 className="custom-table-class"
//                 handleEdit={handleRowClick} // Handle edit click
//                 getRowId={(row) => row.orderId}
//             //onRowClick={handleRowClick} // Handle row click
//             />

//             {isOrderPopupOpen && selectedOrder && (
//                 <OrderDetailsPopup
//                     order={selectedOrder}
//                     isDialogOpen={isOrderPopupOpen}
//                     onClose={() => setIsOrderPopupOpen(false)}
//                 />
//             )}
//         </>
//     );
// };

// export default OrdersTable;
