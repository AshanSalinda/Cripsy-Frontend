import React from "react";
import item from "@/data/productIem.json";
import Overview from "@/components/Product/SingleProduct/Overview";


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
            <Description description={item.description} />
        </div>
    );
};


interface PropsType {
    description: string,
}

const Description: React.FC<PropsType> = ({description}) => {
    return (
        <div className="p-7 box-border">
            <h3 className="font-semibold">Product Details</h3>
            <p className="font-light m-3 text-justify">{description}</p>
        </div>
    );
};

export default ProductItem;
