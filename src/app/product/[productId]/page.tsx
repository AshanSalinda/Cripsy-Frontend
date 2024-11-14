"use client";

import React from "react";
import item from "@/data/productIem.json";
import ItemImageSet from "@/components/Product/ItemImageSet";
import RatingStars from "@/components/Product/RatingStar";
import QuantityInput from "@/components/Product/QuantityInput";
import Button from "@/components/Button/CustomButton";

const ProductItem : React.FC = () => {
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
        <div>
            {/* Product Item Details */}
            <div className="flex bg-black items-start md:items-center min-h-fit lg:h-[92vh]">
                <div className="flex flex-wrap justify-between items-start my-10 md:items-center w-full">
                    <ItemImageSet images={item.images} alt={item.name}/>
                    <div className="flex-[100%] md:flex-[45%] pr-5 ml-3 lg:ml-0">
                        <h1 className="text-white font-medium mt-5 md:mt-0 leading-none">{item.name}</h1>
                        <div className="flex items-center mt-5">
                            <h3 className="text-white font-extralight tracking-wider mr-3">{item.rating}</h3>
                            <RatingStars value={item.rating} />
                        </div>
                        <p className="text-neutral-400 font-light mb-5">{`${item.ratingCount} Ratings | 53 Comments`}</p>
                        <h2 className="text-carnation-500 tracking-wider mb-5">{`Rs ${item.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</h2>
                        <form onSubmit={handleSubmit}>
                            <p className="text-neutral-400 font-normal mb-1">Quantity:</p>
                            <QuantityInput max={item.stock}/>
                            <div className="mt-5">
                                <span className="text-neutral-400 font-normal">Availability:</span>
                                <span className="text-white font-normal ml-2">{item.stock}</span>
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

export default ProductItem;
