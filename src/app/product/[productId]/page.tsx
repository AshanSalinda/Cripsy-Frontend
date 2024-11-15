import React from "react";
import item from "@/data/productIem.json";
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

export default ProductItem;
