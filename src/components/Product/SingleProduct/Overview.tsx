"use client";

import React, { useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { RiShareLine } from "react-icons/ri";
import ProductDetails, { DetailsType } from './Details';
import ImageSet from "./ImageSet";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";



interface PropsType extends DetailsType {
    images: string[]
}

const Overview: React.FC<PropsType> = ({ name, price, rating, ratingCount, stock, images }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFav = () => {
        setIsFavorite(prev => !prev);
    }

    return (
        <div className="bg-black min-h-fit lg:h-[92vh]">
            <div className="flex justify-end items-center pt-5 px-2 text-carnation-500 text-4xl space-x-3 box-border">
                <TooltipProvider><Tooltip>
                    <TooltipTrigger onClick={handleFav} className='clickEffect'>
                        { isFavorite ? <IoMdHeart/> : <IoMdHeartEmpty/> }
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Add to WatchList</p>
                    </TooltipContent>
                </Tooltip></TooltipProvider>
                <TooltipProvider><Tooltip>
                    <TooltipTrigger>
                        <RiShareLine className='clickEffect'/>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Copy link</p>
                    </TooltipContent>
                </Tooltip></TooltipProvider>
            </div>
            <div className="flex bg-black items-start md:items-center min-h-fit h-full">
                <div className="flex flex-wrap justify-between items-start mt-5 mb-10 md:items-center w-full">
                    <ImageSet images={images} alt={name}/>
                    <ProductDetails name={name} price={price} rating={rating} ratingCount={ratingCount} stock={stock}/>
                </div>
            </div>
        </div>
    );
};

export default Overview;