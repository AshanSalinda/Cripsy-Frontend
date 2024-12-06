import axios from "axios";
import {showToast} from "@/components/Messages/showMessage";

// Axios instance with base URL
const api = axios.create({
    baseURL: "http://localhost:8083"
});


// Place order
export const placeOrder = async (userId: number, oderDetails: []) => {
    try {
        await api.post(
            '/api/orders/createOrder',
            { customerID: userId, items: oderDetails }
        );
    } catch (error) {
        console.log("Error placing order:", error);
        showToast({type: "error", message: "Placing order failed!"});
    }
}