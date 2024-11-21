import ProductCard from "@/components/Product/ProductCard";
import React from "react";
import productItemsData from '@/data/productIem.json';

export default function AllProductsPage() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Explore Products</h2>
           
                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {productItemsData.SuperDeals.map((product, index) => (
                        <div key={index} className="w-full flex justify-center">
                            <div className="w-full max-w-[300px]">
                                <ProductCard
                                    imageSrc={product.imageSrc}
                                    title={product.title}
                                    description={product.description}
                                    rating={product.rating}
                                    reviews={product.reviews}
                                    price={product.price}
                                />
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}
