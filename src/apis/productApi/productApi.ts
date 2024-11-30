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
        return {};
    }
};


export const getReviews = async (productId: number, pageNo: number) => {
    try {
        const response = await api.get(`/api/product/${productId}/reviews/${pageNo}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching reviews:", error);
        return [];
    }
}


export const getCartItems = async (userId: number) => {
    try{
        const response = await api.get(`/api/product/cart/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching cart items:", error);
        return [];
    }
}


export const addToCart = async (productId: number, userId: number, quantity: number) => {
    try {
        await api.post(
            '/api/product/cart',
            { productId, userId, quantity }
        );
    } catch (error) {
        console.log("Error adding to cart:", error);
    }
}


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


export const removeFromCart = async (productId: number, userId: number) => {
    try {
        const response = await api.delete(`/api/product/cart/${productId}/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error removing from cart:", error);
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

