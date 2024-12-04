import axios from "axios";

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
        return [];
    }
}


// Add Item to cart
export const addToCart = async (productId: number, userId: number, quantity: number) => {
    try {
        await api.post(
            '/api/product/cart/add',
            { productId, userId, quantity }
        );
    } catch (error) {
        console.log("Error adding to cart:", error);
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
        return [];
    }
}


// Remove Item from cart
export const removeFromCart = async (productId: number, userId: number) => {
    try {
        const response = await api.delete(`/api/product/cart/${productId}/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error removing from cart:", error);
        return [];
    }
}