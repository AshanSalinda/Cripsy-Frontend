"use client";

import React from "react";
import { redirect } from 'next/navigation'
import Image from "next/image";
import CustomButton from "../Button/CustomButton";
import { FaOpencart } from "react-icons/fa";
import RatingStar from "./RatingStar";

export interface ProductCardProps {
    productId: number;
    imageSrc: string;
    title: string;
    description: string;
    rating: number;
    reviews: number;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    productId,
    imageSrc,
    title,
    description,
    rating,
    reviews,
    price,
}) => {
    const handleClick = () => {
        redirect(`/product/${productId}`);
    };

    return (
        <div
            onClick={handleClick}
            className="max-w-[300px] rounded-lg shadow-lg border border-gray-200 transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-carnation-200"
        >
            <div className="bg-gray-300">
                <Image
                    className="w-full h-72 object-cover"
                    src={imageSrc}
                    width={300}
                    height={200}
                    priority
                    alt={title}
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-1 truncate">{title}</h3>
                <p className="text-gray-500 mb-2 truncate">{description}</p>
                <div className="flex items-center mb-4">
                    <RatingStar value={rating} readOnly={true} small={true} />
                    <span className="text-gray-600 ml-2">({reviews})</span>
                </div>

                {/* Centered Price Section */}
                <div className="flex flex-col items-center mb-4">
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm font-semibold align-text-top">Rs</span>
                        <span className="text-xl font-bold text-gray-800">
                            {price.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                        </span>
                    </div>
                </div>

                {/* Full Width Add to Cart Button */}
                <div className="w-full">
                    <CustomButton
                        buttonLabel="Add to Cart"
                        variant="outline"
                        buttonClassName="w-full rounded-full px-6 py-3 text-sm border-carnation-400 text-carnation-400 hover:bg-carnation-500 min-h-10"
                        icon={<FaOpencart />}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
