import axios from "axios";
import { showToast } from "@/components/Messages/showMessage";

// Axios instance with base URL
const api = axios.create({
    baseURL: "http://localhost:8083",
});

// Add a new order
export const addOrder = async (orderData: {
    customerID: number;
    purchasedDate: string; // Format: YYYY-MM-DD
    deliveredDate?: string; // Optional field
    orderStatus: string;
    totalPrice: number;
    items: { itemId: number; quantity: number; price: number }[]; // Include item details
    deliveryPersonId?: number; // Optional field
}) => {
    try {
        const response = await api.post("/api/order/add", orderData);
        if (response.status === 200) {
            console.log("Order placed successfully:", response.data);
            return response.data;
        }
    } catch (error) {
        console.error("Error placing order:", error);
        showToast({ type: "error", message: "Failed to place the order!" });
        throw error;
    }
};

// Get all orders
export const getAllOrders = async () => {
    try {
        const response = await api.get("/api/orders/getAllOrders");
        return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};

// Get order by ID
export const getOrderById = async (orderId: number) => {
    try {
        const response = await api.get(`/api/order/${orderId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching order details:", error);
        showToast({ type: "error", message: "Order not found!" });
        throw error;
    }
};

// Get orders for a specific customer
export const getCustomerOrders = async (customerId: number) => {
    try {
        const response = await api.get(`/api/order/customer/${customerId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching customer orders:", error);
        showToast({ type: "error", message: "Failed to fetch customer orders!" });
        throw error;
    }
};

// Update order status
export const updateOrderStatus = async (orderId: number, orderStatus: string) => {
    try {
        const response = await api.put(`/api/order/updateStatus`, { orderId, orderStatus });
        if (response.status === 200) {
            console.log("Order status updated successfully:", response.data);
            return response.data;
        }
    } catch (error) {
        console.error("Error updating order status:", error);
        showToast({ type: "error", message: "Failed to update order status!" });
        throw error;
    }
};

// Delete an order
export const deleteOrder = async (orderId: number) => {
    try {
        const response = await api.delete(`/api/order/${orderId}`);
        if (response.status === 200) {
            console.log("Order deleted successfully");
            return response.data;
        }
    } catch (error) {
        console.error("Error deleting order:", error);
        showToast({ type: "error", message: "Failed to delete the order!" });
        throw error;
    }
};
