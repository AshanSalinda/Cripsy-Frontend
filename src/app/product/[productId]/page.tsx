import React from "react";
import item from "@/data/productIem.json";
import Overview from "@/components/Product/Overview";

const ProductItem : React.FC = () => {
    const productData = {
        name: item.name,
        price: item.price,
        rating: item.rating,
        ratingCount: item.ratingCount,
        stock: item.stock,
        images: item.images
    }
    
    return (
        <div>
            <Overview {...productData} />
        </div>
    );
};

export default ProductItem;
