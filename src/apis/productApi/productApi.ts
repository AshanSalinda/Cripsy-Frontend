import axios from "axios";

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
        const response = await api.get("/api/product");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

// Get product by ID
export const getProductById = async (id: number) => {
    try {
        const response = await api.get(`/api/product/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
};

export const getProductItemDetails = async (productId: number, userName: string ) => {
    try {
        const response = await api.get(`/api/product/${productId}/${userName}`);
        return response.data;
    } catch (error) {
        console.log("Error Getting product Details:", error);
        return {
            productId: 0,
            name: "Product Item",
            description: "",
            discount: 0,
            price: 0,
            stock: 0,
            imageUrls: [],
            avgRatings: 0,
            ratingCount: 0,
            reviewCount: 0,
            isUserRated: false,
            ratingStats: {
                rating5: 0,
                rating4: 0,
                rating3: 0,
                rating2: 0,
                rating1: 0,
            },
            initialReviews: [],
            relatedItems: []
        };
    }
};


export const getReviews = async (productId: number, pageNo: number) => {
    try {
        const response = await api.get(`/api/product/${productId}/reviews/${pageNo}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return [];
    }
}


// Update a product
export const updateProduct = async (
    id: number,
    updatedData: {
        name?: string;
        description?: string;
        stock?: number;
        price?: number;
        discount?: number;
        imageUrls?: string[];
    }
) => {
    try {
        const response = await api.put(`/api/product/${id}`, updatedData);
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
