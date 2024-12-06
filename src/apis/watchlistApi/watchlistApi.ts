import axios from "axios";
import { showToast } from "@/components/Messages/showMessage";


// Axios instance with base URL
const api = axios.create({
    baseURL: "http://localhost:8080"
});


// Get watchlist items
export const getWatchlistItems = async (userId: number) => {
    try{
        const response = await api.get(`/api/product/watchlist/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching Watchlist items:", error);
        showToast({type: "error", message: "Failed to find watchlist items!"});
        return [];
    }
}


// Add Item to watchlist
export const addToWatchlist = async (productId: number, userId: number) => {
    try {
        await api.post(`/api/product/watchlist/${productId}/${userId}`);
    } catch (error) {
        console.log("Error adding to watchlist:", error);
        showToast({type: "error", message: "Failed adding to watchlist!"});
        throw error;
    }
}


// Remove Item from watchlist
export const removeFromWatchlist = async (productId: number, userId: number, responseExpected: boolean = true) => {
    try {
        const response = await api.delete(`/api/product/watchlist/${productId}/${userId}/${responseExpected}`);
        return response.data;
    } catch (error) {
        console.log("Error removing from watchlist:", error);
        showToast({type: "error", message: "Failed to remove from watchlist!"});

        if(responseExpected) {
            return [];
        } else {
            throw error;
        }
    }
}