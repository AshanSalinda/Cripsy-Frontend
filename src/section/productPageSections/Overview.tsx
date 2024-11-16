"use client";
import React, { useState } from 'react';
import ImageSet from "./ImageSet";
import ProductDetails, { DetailsType } from './Details';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { RiShareLine } from "react-icons/ri";
import Tooltip from '@/components/Tooltip/Tooltip';



interface PropsType extends DetailsType {
    images: string[]
}

const Overview: React.FC<PropsType> = (props) => {
    const { images, ...details } = props;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFav = () => {
        setIsFavorite(prev => !prev);
    }

    const handleCopyUrl = () => {
        const currentUrl = window.location.href;
        
        navigator.clipboard.writeText(currentUrl)
        .then(() => {
            alert("URL copied to clipboard: " + currentUrl);
        })
        .catch((err) => {
            console.log("Failed to copy URL:", err);
        });
    };

    return (
        <div className="bg-black min-h-fit lg:h-[92vh]">
            <div className="flex justify-end items-center pt-5 px-2 text-carnation-500 text-4xl space-x-3 box-border">
                <Tooltip 
                    label={ isFavorite ? "Remove from Watchlist" : "Add to WatchList" }
                    className='clickEffect'
                    onClick={handleFav} >
                    { isFavorite ? <IoMdHeart/> : <IoMdHeartEmpty/> }
                </Tooltip>
                <Tooltip 
                    label='Copy link'
                    className='clickEffect'
                    onClick={handleCopyUrl} >
                    <RiShareLine className='clickEffect'/>
                </Tooltip>
            </div>
            <div className="flex bg-black items-start md:items-center min-h-fit h-full">
                <div className="flex flex-wrap justify-between items-start mt-5 mb-10 md:items-center w-full">
                    <ImageSet images={images} alt={props.name}/>
                    <ProductDetails {...details} />
                </div>
            </div>
        </div>
    );
};

export default Overview;