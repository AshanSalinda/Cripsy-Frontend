"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import CustomButton from '../Button/CustomButton';
import { FaOpencart } from "react-icons/fa";
import RatingStar from './RatingStar';

export interface ProductCardProps {
    productId?: string;
    imageSrc: string;
    title: string;
    description: string;
    rating: number;
    reviews: number;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    productId = 1,
    imageSrc,
    title,
    description,
    rating,
    reviews,
    price,
}) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${productId}`);
    }

    return (
        <div onClick={handleClick} className="max-w-80 rounded-lg shadow-lg border border-gray-200 transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-carnation-200">
            <div className="bg-gray-300">
                <Image
                    className="w-full h-72"
                    src={imageSrc}
                    width={300}
                    height={200}
                    objectFit='cover'
                    priority
                    alt={title}
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-gray-500 mb-2">{description}</p>
                <div className="flex items-center mb-4">
                    <RatingStar value={rating} readOnly={true} small={true} />
                    <span className="text-gray-600 ml-2">({reviews})</span>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <CustomButton
                        buttonLabel="Add to Cart"
                        variant="outline"
                        buttonClassName="rounded-full px-4 py-2 transition font-semibold"
                        icon={<FaOpencart />}
                    />
                    <div className="flex items-start space-x-1">
                        <span className="text-sm align-text-top font-semibold">Rs</span>
                        <span className="text-xl font-bold">{price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
