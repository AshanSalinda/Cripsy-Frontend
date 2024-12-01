"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import CustomButton from "../Button/CustomButton";
import RatingStar from "./RatingStar";
import { Separator } from "../ui/separator";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Tooltip from '@/components/Tooltip/Tooltip';
import { availableMemory } from "process";




// Product Card Props Interface
export interface WatchlistCardProps {
    productId?: string | number;
    imageSrc: string;
    title: string;
    description: string;
    CardButtonlabel?: string;
    rating: number;
    availableItems: number;
    reviews: number;
    price: number;
    onAddToCart?: () => void;
    onRemoveFromWatchlist?: () => void;
    onPreviewClick?: () => void;
    hideAddToCart?: boolean;
    hideHartIcon?: boolean;
}

const WatchlistCard: React.FC<WatchlistCardProps> = ({
    productId = 1,
    imageSrc,
    title,
    description,
    CardButtonlabel = "Live Preview",
    rating,
    reviews,
    price,
    availableItems,
    onPreviewClick,
    hideAddToCart = false,
    hideHartIcon = false,
}) => {
    const router = useRouter();

    

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFav = () => {
        setIsFavorite(prev => !prev);
    }

    return (

        <div className="w-3/2 rounded-lg h-60 overflow-hidden shadow-custom-dark transition-transform  transform hover:scale-105 hover:shadow-lg">
            <div className="flex  h-full  items-start gap-3">

                <div className="bg-gray-300  flex-shrink-0 p-0 rounded-lg h-full w-1/6  ">

                    {/* Product Image */}
                    <Image
                        className="w-full h-fit object-cover"
                        src={imageSrc}
                        width={300}
                        height={200}
                        priority
                        alt={title}
                    />
                </div>

                <div className="flex-1 mt-4 pl-8  py-3">

                    {/* Product Details */}
                    <div className=" h-full">
                        <h3 className="text-2xl font-semibold  truncate mb-4">{title}</h3>
                        <p className="text-gray-500 truncate mb-4">{description}</p>

                        {/* Product Rating */}
                        <div className="flex gap-3 text-left mr-36">
                            <span className="text-black ml-0 text-lg">{reviews}</span>
                            <RatingStar value={rating} readOnly={true} small={true} />
                        </div>

                    </div>

                </div>
                <div className="flex-shrink-0  items-end   h-fit py-6">
                    <Separator orientation="vertical" className="my-0 w-1  h-48 bg-opacity-15 bg-slate-700" />


                </div>

                <div className="flex-shrink-0 py-11 px-10 items-center ">


                    <div className="items-baseline space-x-1 leading-none mt-0   ">

                        {/* Favorite Icon */}

                        <div className="pl-40 pt-0">
                        {!hideHartIcon && (
                            <Tooltip
                                label={isFavorite ? "Remove from Watchlist" : "Add to WatchList"}
                                className='clickEffect'
                                onClick={handleFav} >
                                {isFavorite ? <IoMdHeart className="text-carnation-500 text-3xl" /> : <IoMdHeartEmpty className="text-carnation-500 text-3xl" />}
                            </Tooltip>
                        )}
                        </div>
                        
                    {/* Product Price */}
                        <span className="text-2xl font-semibold ">Rs</span>
                        <span className="text-2xl font-bold whitespace-nowrap">
                            {price.toFixed(2).toLocaleString()}
                        </span>
                        <span className="text-sm font-sans text-slate-500 pt-3 flex">Availability : {availableItems} items </span>

                        <div className="flex  gap-4">
                            {/* Live Preview Button   and Remove Button */}
                            
                            <CustomButton
                                buttonLabel={CardButtonlabel} 
                                variant="outline"
                                buttonClassName="rounded-5 px-2  py-2 my-10   items-center transition "
                                onClick={onPreviewClick} 
                            
                            />
                            
                            {/* Add to Cart Button */}

                            {!hideAddToCart && (
                                <CustomButton
                                    buttonLabel=""
                                    variant="outline"
                                    buttonClassName="rounded-5 p-3 my-10   items-center  border-slate-500 text-slate-500 hover:border-white "
                                    icon={<MdOutlineShoppingCart className="p-0 m-0" />}

                                />
                            )}
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default WatchlistCard;


