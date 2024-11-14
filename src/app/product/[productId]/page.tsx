import React from "react";
import item from "@/data/productIem.json";
import ItemImageSet from "@/components/Product/ItemImageSet";
import RatingStars from "@/components/Product/RatingStar";

const productItem : React.FC = () => {
    return (
        <div>
            {/* Product Item Details */}
            <div className="flex items-center bg-black h-[92vh]">
                <div className="flex flex-wrap justify-between items-center w-full">
                    <ItemImageSet images={item.images} alt={item.name}/>
                    <div className="bg-slate-400 md:flex-[45%] flex-[100%]">
                        <h1 className="text-white font-medium">{item.name}</h1>
                        <h3 className="text-white font-thin tracking-wider">{item.rating}</h3>
                        <RatingStars />
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default productItem;
