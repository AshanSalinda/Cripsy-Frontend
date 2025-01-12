import axios from "axios";
import { showToast } from "@/components/Messages/showMessage";


// Axios instance with base URL
const api = axios.create({
    baseURL: "http://localhost:8080"
});

// Add a product
export const addProduct = async (productData: {
    productId: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    discount: number;
    rating: number;
    ratingCount: number;
    category: number;
    imageUrls: string[];
}) => {
    try {
        const response = await api.post("/api/product/add", productData);
        if (response.status === 200) {
            console.log("Product added successfully:", response.data);
            return response.data;
        }
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
};

// Get all products
export const getProducts = async () => {
    try {
        const response = await api.get("/api/product/getAll");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

// Get product Item List
export const getProductsDetails = async () => {
    try {
        const response = await api.get("/api/product/getAllProductsDetails");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

// Get product Item
export const getProductItemDetails = async (productId: number, userId: number ) => {
    try {
        const response = await api.get(`/api/product/${productId}/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error Getting product Details:", error);
        showToast({type: "error", message: "Product not found!"});
        return {};
    }
};

// Get Product Reviews
export const getReviews = async (productId: number, pageNo: number) => {
    try {
        const response = await api.get(`/api/product/reviews/${productId}/${pageNo}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching reviews:", error);
        showToast({type: "error", message: "Failed to fetch reviews!"});
        return [];
    }
}

// Add a review
export const addReview = async (productId: number, userId: number, userName: string, rating: number, comment: string ) => {
    try {
        const response = await api.post(
            `/api/product/review`, 
            { productId, userId, userName, rating, comment }
        );
        return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("Error adding review:", error);

        if(error?.status === 409) {
            showToast({type: "warning", message: "You have already reviewed this product!"});
            return error?.response?.data || [];
        } else {
            showToast({type: "error", message: "Failed to add review!"});
            return [];
        }
    }
};


// Update a product
export const updateProduct = async (updatedData: { productId: number; name: string; description: string; stock: number; price: number; discount: number; rating: number; ratingCount: number; category: number; imageUrls: string[]; }) => {
    try {
        const response = await api.put(`/api/product/update`, updatedData);
        if (response.status === 200) {
            console.log("Product updated successfully:", response.data);
            return response.data;
        }
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
};

// Delete a product
export const deleteProduct = async (id: number) => {
    try {
        const response = await api.delete(`/api/product/${id}`);
        if (response.status === 200) {
            console.log("Product deleted successfully");
            return response.data;
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await api.get("/api/product/category/getAll"); // Use the api instance for consistency
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

export const addCategory = async (categoryData: { categoryName: string }) => {
    try {
        const response = await api.post("/api/product/category/add", categoryData); // Adjust the endpoint to match your API
        return response.data;
    } catch (error) {
        console.error("Error adding category:", error);
        throw error;
    }
};
