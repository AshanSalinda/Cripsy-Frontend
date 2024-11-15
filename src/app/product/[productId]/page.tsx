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
    const isHTML = /<[a-z][\s\S]*>/i.test(description);

    return (
        <div className="px-3 py-7 md:p-7 box-border">
            <h3 className="font-medium">Product Details</h3>
            {isHTML ? (
                <div className="m-3" dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
                <div className="font-light m-3 text-justify">{description}</div>
            )}
        </div>
    );
};

interface RelatedItemsType {
    relatedItems: ProductCardProps[]
}


const RelatedItems: React.FC<RelatedItemsType> = ({ relatedItems }) => {
    return (
        <div className="px-3 py-7 md:p-7">
            <h3 className="font-medium">Related Items</h3>

            <div className="pt-5 pb-16 overflow-x-auto">
                <div className="flex w-fit mx-auto space-x-3 ">
                    {relatedItems.map((item, index) => (
                        <ProductCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
