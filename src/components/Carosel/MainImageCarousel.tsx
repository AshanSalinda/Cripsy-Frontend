"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselItem {
    image: string;
    title: string;
    description: string;
}

const carouselItems: CarouselItem[] = [
    {
        image: '/carousalImg2.png',
        title: 'Discover Your Signature Style',
        description: 'From timeless classics to the latest trends, elevate your wardrobe with pieces that speak to your unique personality.',
    },
    {
        image: '/carousalImg2.png',
        title: 'Explore New Arrivals',
        description: 'Discover the latest fashion that fits your lifestyle and personality.',
    },
    {
        image: '/carousalImg3.png',
        title: 'Timeless Essentials',
        description: 'Choose from a curated collection of wardrobe essentials that last.',
    },
];

const MainImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full flex bg-gray-600 text-white py-8"
                    >
                        {/* Text section on the left */}
                        <div className="flex flex-col justify-center items-start w-1/2 px-8">
                            <h2 className="text-3xl font-bold">{item.title}</h2>
                            <p className="text-lg mt-2 text-gray-200">{item.description}</p>
                        </div>
                        
                        {/* Image section on the right with responsive sizing */}
                        <div className="flex items-center justify-center w-1/2 h-auto max-h-[500px]">
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                layout="responsive" 
                                width={500} 
                                height={500} 
                                className="max-w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainImageCarousel;
