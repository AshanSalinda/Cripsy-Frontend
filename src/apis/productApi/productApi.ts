import axios from "axios";
const baseUrl = "http://localhost:8082/api/product/";

// Add a product
export const getProductItemDetails = async (productId: number, userName: string ) => {
    try {
        const response = await axios.get(`${baseUrl}${2}/${userName}`);
        const product = response.data;
        console.log("product:", product);
        return product;
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