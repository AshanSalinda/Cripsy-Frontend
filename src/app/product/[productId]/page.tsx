import React from "react";
import item from "@/data/productIem.json";
import ItemImageSet from "@/components/Product/ItemImageSet";

const productItem = () => {


    return (
        <div>
            {/* Product Item Details */}
            <div className="flex items-center bg-black h-[92vh]">
                <div className="flex justify-between items-center w-full">
                    <ItemImageSet images={item.images} alt={item.name}/>
                    <div className="w-1/2">
                        <h1>{item.name}</h1>
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
