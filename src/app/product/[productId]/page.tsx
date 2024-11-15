import React from "react";
import item from "@/data/productIem.json";
import ProductCard, { ProductCardProps } from "@/components/Product/ProductCard";
import Overview from "@/components/Product/SingleProduct/Overview";
import RatingAndReviews from "@/components/Product/SingleProduct/RatingAndReviews";

const ProductItem : React.FC = () => {
    const commonData = {
        rating: item.rating,
        ratingCount: item.ratingCount,
        totalReviewsCount: item.totalReviewsCount,
    }

    const productData = {
        ...commonData,
        name: item.name,
        price: item.price,
        stock: item.stock,
        images: item.images
    }

    const ratingAndReviewsData = {
        ...commonData,
        ratingStats: item.ratingStats,
        reviews: item.initialReviews
    }
    
    return (
        <div>
            <Overview {...productData} />
            <Description description={item.description} />
            <RatingAndReviews {...ratingAndReviewsData} />
            <RelatedItems relatedItems={item.relatedItems} />
        </div>
    );
};


interface PropsType {
    description: string,
}

const Description: React.FC<PropsType> = ({description}) => {
    return (
        <div className="px-3 py-7 md:p-7 box-border">
            <h3 className="font-semibold">Product Details</h3>
            <p className="font-light m-3 text-justify">{description}</p>
        </div>
    );
};

interface RelatedItemsType {
    relatedItems: ProductCardProps[]
}


const RelatedItems: React.FC<RelatedItemsType> = ({ relatedItems }) => {
    return (
        <div className="px-3 py-7 md:p-7">
            <h3 className="font-semibold">Related Items</h3>

            <div className="flex md:w-fit md:mx-auto pt-5 pb-16 space-x-3 overflow-x-auto">
                {relatedItems.map((item, index) => (
                    <ProductCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export default ProductItem;
