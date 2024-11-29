"use client"
import React, { useEffect } from 'react';
import item from "@/data/productIem.json";
import Overview from "@/section/productPageSections/Overview";
import Description from "@/section/productPageSections/Description";
import RatingAndReviews from "@/section/productPageSections/RatingAndReviews";
import RelatedItems from "@/section/productPageSections/RelatedItems";
import { getProductItemDetails } from '@/apis/productApi/productApi';


const ProductItem: React.FC = () => {
    const productId = 1;

    const [productItem, setProductItem] = React.useState({
        productId: 0,
        name: "",
        description: "",
        discount: 0,
        price: 0,
        stock: 0,
        imageUrls: [],
        avgRatings: 0,
        ratingCount: 0,
        reviewCount: 0,
        isUserRated: true,
        ratingStats: {
            rating5: 0,
            rating4: 0,
            rating3: 0,
            rating2: 0,
            rating1: 0,
        },
        initialReviews: [],
        relatedItems: []
    });

    const {
        name, description, price, stock, imageUrls, avgRatings, ratingCount, reviewCount,
        ratingStats, isUserRated, initialReviews
    } = productItem;

    const productData = {
        name, price, stock, imageUrls, avgRatings, ratingCount, reviewCount
    };

    const ratingAndReviewsData = {
        productId, avgRatings, ratingCount, reviewCount, ratingStats, isUserRated, reviews: initialReviews
    };


    useEffect(() => {
        const fetchProductDetails = async () => {
            const product = await getProductItemDetails( productId, "string" );
            setProductItem(product);
        };

        fetchProductDetails();
    }, []);


    return (
        <div>
            <Overview {...productData} />
            <Description description={description} />
            <RatingAndReviews {...ratingAndReviewsData} />
            <RelatedItems relatedItems={item.relatedItems} />
        </div>
    );
};


export default ProductItem;
