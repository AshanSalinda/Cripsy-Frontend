import axios from "axios";

// Axios instance with base URL
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
});


// Get customer details
export const getCustomerDetails = async (userId: number) => {
    try{
        const response = await api.get(`/api/customer/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching cart items:", error);
        return [];
    }
}
