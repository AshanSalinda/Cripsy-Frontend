import React from 'react';
import item from "@/data/productIem.json";
import Overview from "@/section/productPageSections/Overview";
import Description from "@/section/productPageSections/Description";
import RatingAndReviews from "@/section/productPageSections/RatingAndReviews";
import RelatedItems from "@/section/productPageSections/RelatedItems";


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


export default ProductItem;
