"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/Product/ProductCard";
import { getProducts } from "@/apis/productApi/productApi";

// Define the Product type
type Product = {
    productId: number;
    name: string;
    price: number;
    description: string;
    ratingCount: number;
    avgRatings: number;
    imageUrl: string;
};

export default function AllProductsPage() {
    // State with proper type
    const [products, setProducts] = useState<Product[]>([]);

    // Fetch products on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Explore Products</h2>
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.productId} className="w-full flex justify-center">
                        <div className="w-full max-w-[300px]">
                            <ProductCard
                                imageSrc={product.imageUrl}
                                title={product.name}
                                description={product.description}
                                rating={product.avgRatings}
                                reviews={product.ratingCount}
                                price={product.price}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


