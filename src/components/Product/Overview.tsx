"use client";

import React, { useState } from 'react';
import ItemImageSet from "@/components/Product/ItemImageSet";
import RatingStars from "@/components/Product/RatingStar";
import QuantityInput from "@/components/Product/QuantityInput";
import Button from "@/components/Button/CustomButton";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { RiShareLine } from "react-icons/ri";


interface PropsType {
    name: string,
    price: number,
    rating: number,
    ratingCount: number,
    stock: number,
    images: string[]
}

const Overview: React.FC<PropsType> = ({ name, price, rating, ratingCount, stock, images }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFav = () => {
        setIsFavorite(prev => !prev);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const quantity = ((e.target as HTMLFormElement).elements.namedItem("quantity") as HTMLInputElement)?.value;
        const submitter = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement)?.value;

        if (submitter === "buy") {
            console.log("Buy Now clicked", quantity);
        } else if (submitter === "addToCart") {
            console.log("Add to Cart clicked", quantity);
        }
    };

    return (
        <div className="bg-black min-h-fit lg:h-[92vh]">
            <div className="flex justify-end items-center pt-5 px-2 text-carnation-500 text-4xl space-x-2 box-border">
                <button onClick={handleFav} className='clickEffect'>{ isFavorite ? <IoMdHeart/> : <IoMdHeartEmpty/> }</button>
                <RiShareLine className='clickEffect'/>
            </div>
            <div className="flex bg-black items-start md:items-center min-h-fit h-full">
                <div className="flex flex-wrap justify-between items-start mt-5 mb-10 md:items-center w-full">
                    <ItemImageSet images={images} alt={name}/>
                    <div className="flex-[100%] md:flex-[45%] pr-5 ml-3 lg:ml-0">
                        <h1 className="text-white font-medium mt-5 md:mt-0 leading-none">{name}</h1>
                        <div className="flex items-center mt-5">
                            <h3 className="text-white font-extralight tracking-wider mr-3">{rating}</h3>
                            <RatingStars value={rating} />
                        </div>
                        <p className="text-neutral-400 font-light mb-5">{`${ratingCount} Ratings | 53 Comments`}</p>
                        <h2 className="text-carnation-500 tracking-wider mb-5">{`Rs ${price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</h2>
                        <form onSubmit={handleSubmit}>
                            <p className="text-neutral-400 font-normal mb-1">Quantity:</p>
                            <QuantityInput max={stock}/>
                            <div className="mt-5">
                                <span className="text-neutral-400 font-normal">Availability:</span>
                                <span className="text-white font-normal ml-2">{stock}</span>
                            </div>
                            <div className="flex items-center mt-5">
                                <Button name="action" value="buy" buttonLabel="Buy Now" variant="primary" buttonClassName="px-8 mr-6"></Button>
                                <Button name="action" value="addToCart" buttonLabel="Add to Cart" variant="outline" buttonClassName="px-5"></Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;