import axios from "axios";

// Axios instance with base URL
const api = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_BASE_URL
    baseURL: "http://localhost:8081"
});


// Get customer details
export const getCustomerDetails = async (userId: number) => {
    try{
        const response = await api.get(`/api/customers/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching customer Details:", error);
        return [];
    }
}


export const updateCustomer = async (customerID: number ,updatedData: { userName: string; email: string; contact: string; address: string; district: string; }) => {
    try {
        const response = await api.put(`/api/customers/${customerID}`, updatedData);
        if (response.status === 200) {
            console.log("Product updated successfully:", response.data);
            return response.data;
        }
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
};