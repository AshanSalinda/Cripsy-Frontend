import React from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import Popup from "../Popup/Popup";
import { Order } from "../Table/Columns";

interface OrderStatusPopupProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
    selectedOrder: Order | null; // Add type for the selected order
}

const OrderStatusPopup: React.FC<OrderStatusPopupProps> = ({
    isDialogOpen,
    setIsDialogOpen,
    selectedOrder,
}) => {
    const options = [
        { label: "Processing", value: "Processing" },
        { label: "Dispatched", value: "Dispatched" },
        { label: "Delivered", value: "Delivered" },
    ];

    const handleSave = () => {
        console.log("Order Status Updated:", selectedOrder);
        setIsDialogOpen(false); // Close the popup after saving
    };

    return (
        <Popup
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Update Order Status"
            description={`Update the status for Order ID: ${
                selectedOrder?.orderId || "Unknown"
            }`}
            onSaveClick={handleSave}
        >
            <div className="flex flex-row space-x-4 mb-4">
                <div className="w-full">
                    <Dropdown
                        options={options}
                        placeholder="Select Order Status"
                        onChange={(value) => console.log("Selected Status:", value)}
                    />
                </div>
            </div>
        </Popup>
    );
};

export default OrderStatusPopup;
