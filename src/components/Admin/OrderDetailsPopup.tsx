// import React, { useState } from "react";
// import Popup from "@/components/Popup/Popup";
// import { Button } from "../ui/button";
// import { Select, SelectItem } from "../ui/select"; // Example: a dropdown component you might use


// interface Order {
//   orderId: string;
//   productName: string;
//   status: string;
//   details: string;
//   receiver: {
//     name: string;
//     address: string;
//     contact: string;
//   };
// }

// interface OrderPopupProps {
//   order: Order;
//   isOpen: boolean;
//   onClose: () => void;
//   onUpdateStatus: (orderId: string, newStatus: string) => void;
//   setIsOrderPopupOpen: (open: boolean) => void;
// }

// const OrderPopup: React.FC<OrderPopupProps> = ({
//   order,
//   isOpen,
//   onClose,
//   onUpdateStatus,
// }) => {
//   const [selectedStatus, setSelectedStatus] = useState(order.status);

//   const handleStatusChange = (newStatus: string) => {
//     setSelectedStatus(newStatus);
//   };

//   const handleSave = () => {
//     onUpdateStatus(order.orderId, selectedStatus);
//     onClose();
//   };

//   return (
//     <Popup
//       isOpen={isOpen}
//       onClose={onClose}
//       title={`Order: ${order.orderId} - ${order.productName}`}
//       description="Manage the order details below:"
//       onSaveClick={handleSave}
//       saveButtonLabel="Update"
//     >
//       {/* Order Details */}
//       <div className="mb-4">
//         <h3 className="font-semibold text-lg">Order Details</h3>
//         <p>{order.details}</p>
//       </div>

//       {/* Status Update */}
//       <div className="mb-4">
//         <h3 className="font-semibold text-lg">Change Order Status</h3>
//         <Select
//           value={selectedStatus}
//           onValueChange={handleStatusChange}
//           //className="w-full"
//         >
//           <SelectItem value="pending">Pending</SelectItem>
//           <SelectItem value="confirmed">Confirmed</SelectItem>
//           <SelectItem value="shipping">Shipping</SelectItem>
//         </Select>
//       </div>

//       {/* Receiver Details */}
//       <div>
//         <h3 className="font-semibold text-lg">Receiver Details</h3>
//         <p>
//           <strong>Name:</strong> {order.receiver.name}
//         </p>
//         <p>
//           <strong>Address:</strong> {order.receiver.address}
//         </p>
//         <p>
//           <strong>Contact:</strong> {order.receiver.contact}
//         </p>
//       </div>
//     </Popup>
//   );
// };

// export default OrderPopup;

import React, { useState } from "react";
import Popup from "@/components/Popup/Popup";
import { Select, SelectItem } from "../ui/select"; // Example: a dropdown component you might use

interface OrderPopupProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    children: React.ReactNode; // Allows passing dynamic content (order details, receiver details, etc.)
    onUpdateStatus?: (newStatus: string) => void; // Optional: for updating the order status
}

const OrderPopup: React.FC<OrderPopupProps> = ({
    isOpen,
    onClose,
    title,
    description,
    children,
    onUpdateStatus,
}) => {
    const [selectedStatus, setSelectedStatus] = useState("pending");

    const handleStatusChange = (newStatus: string) => {
        setSelectedStatus(newStatus);
        if (onUpdateStatus) onUpdateStatus(newStatus); // Call status update callback if provided
    };

    const handleSave = () => {
        if (onUpdateStatus) onUpdateStatus(selectedStatus); // Save updated status
        onClose(); // Close the popup
    };

    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            description={description}
            onSaveClick={handleSave}
            saveButtonLabel="Update"
        >
            {/* Render dynamic content passed via children */}
            <div className="mb-4">{children}</div>

            {/* Dropdown for status update */}
            {onUpdateStatus && (
                <div className="mt-4">
                    <h5 className="font-semibold text-lg">Change Order Status</h5>
                    <Select value={selectedStatus} onValueChange={handleStatusChange}>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="shipping">Shipping</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                    </Select>
                </div>
            )}
        </Popup>
    );
};

export default OrderPopup;

