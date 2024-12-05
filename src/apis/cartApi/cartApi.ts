import axios from "axios";
import { showToast } from "@/components/Messages/showMessage";

// Axios instance with base URL
const api = axios.create({
    baseURL: "http://localhost:8080"
});


// Get cart items
export const getCartItems = async (userId: number) => {
    try{
        const response = await api.get(`/api/product/cart/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching cart items:", error);
        showToast({type: "error", message: "Fetching cart items failed!"});
        return [];
    }
}


// Add Item to cart
export const addToCart = async (productId: number, userId: number, quantity: number) => {
    try {
        await api.post(
            '/api/product/cart',
            { productId, userId, quantity }
        );
        showToast({type: "success", message: "Added to cart!"});
    } catch (error) {
        console.log("Error adding to cart:", error);
        showToast({type: "error", message: "Adding to cart failed!"});
    }
}


// Update cart quantity
export const updateCartQuantity = async (productId: number, userId: number, quantity: number) => {
    try {
        const response = await api.put(
            '/api/product/cart',
            { productId, userId, quantity }
        );
        return response.data;
    } catch (error) {
        console.log("Error updating cart quantity:", error);
        showToast({type: "error", message: "Updating quantity failed!"});
        throw error;
    }
}


// Remove Item from cart
export const removeFromCart = async (productId: number, userId: number) => {
    try {
        const response = await api.delete(`/api/product/cart/${productId}/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error removing from cart:", error);
        showToast({type: "error", message: "Removing from cart failed!"});
        throw error;
    }
}


// Initiate a Order
export const initiateOrder = async (orderItems: {productId: number, quantity: number}[]) => {
    try {
        const response = await api.post('/api/product/reserve/initiate', orderItems);
        return response.data;
    } catch (error) {
        console.log("Error when initiating order:", error);
        showToast({type: "error", message: "There was an error initiating order!"});
        throw error;
    }
}


// Confirm Order
export const confirmOrder = async (transactionId: number) => {
    try {
        const response = await api.post(`/api/product/reserve/confirm/${transactionId}`);
        return response.data;
    } catch (error) {
        console.log("Failed to place order:", error);
        showToast({type: "error", message: "Failed to place order!"});
    }
}


// Cancel Order
export const cancelOrder = async (transactionId: number) => {
    try {
        await api.post(`/api/product/reserve/cancel/${transactionId}`);
    } catch (error) {
        console.log("Failed to cancel order:", error);
    }
}