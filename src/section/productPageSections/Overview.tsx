"use client";
import React, { useEffect, useState } from 'react';
import ImageSet from "./ImageSet";
import Tooltip from '@/components/Tooltip/Tooltip';
import ProductDetails, { DetailsType } from './Details';
import { RiShareLine } from "react-icons/ri";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { addToWatchlist, removeFromWatchlist } from '@/apis/watchlistApi/watchlistApi';



interface PropsType extends DetailsType {
    imageUrls: string[],
    isWatchlistAdded: boolean,
}

const Overview: React.FC<PropsType> = (props) => {
    const { productId, userId, imageUrls, isWatchlistAdded: initialValue, ...details } = props;
    const [isWatchlistAdded, setIsWatchlistAdded] = useState(initialValue);

    useEffect(() => {
        setIsWatchlistAdded(initialValue);
    }, [initialValue]);

    const handleFav = async () => {
        if(isWatchlistAdded) {
            await removeFromWatchlist(productId, userId, false);
        } else {
            await addToWatchlist(productId, userId);
        }

        setIsWatchlistAdded(prev => !prev);
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
        <div className="bg-black min-h-fit lg:h-[calc(100vh-8rem)]">
            <div className="flex justify-end items-center pt-5 px-2 text-carnation-500 text-4xl space-x-3 box-border">
                <Tooltip 
                    label={ isWatchlistAdded ? "Remove from Watchlist" : "Add to WatchList" }
                    className='clickEffect'
                    onClick={handleFav} >
                    { isWatchlistAdded ? <IoMdHeart/> : <IoMdHeartEmpty/> }
                </Tooltip>
                <Tooltip 
                    label='Copy link'
                    className='clickEffect'
                    onClick={handleCopyUrl} >
                    <RiShareLine className='clickEffect'/>
                </Tooltip>
            </div>
            <div className="flex bg-black items-start md:items-center min-h-fit h-full">
                <div className="flex flex-wrap justify-between items-start mt-5 mb-12 md:items-center w-full">
                    <ImageSet images={imageUrls} alt={props.name}/>
                    <ProductDetails productId={productId} userId={userId} {...details} />
                </div>
            </div>
        </div>
    );
};

export default Overview;