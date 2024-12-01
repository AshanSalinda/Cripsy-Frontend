"use client"
import React, { useEffect } from 'react';
import item from "@/data/productIem.json";
import Overview from "@/section/productPageSections/Overview";
import Description from "@/section/productPageSections/Description";
import RatingAndReviews from "@/section/productPageSections/RatingAndReviews";
import RelatedItems from "@/section/productPageSections/RelatedItems";
import { getProductItemDetails } from '@/apis/productApi/productApi';


interface ProductItemType {
    productId: number,
    name: string,
    description: string,
    discount: number,
    price: number,
    stock: number,
    imageUrls: string[],
    avgRatings: number,
    ratingCount: number,
    reviewCount: number,
    isUserRated: boolean,
    ratingStats: {
        rating5: number,
        rating4: number,
        rating3: number,
        rating2: number,
        rating1: number,
    },
    initialReviews: [],
    relatedItems: []
}


const ProductItem: React.FC = () => {
    const [productItem, setProductItem] = React.useState<Partial<ProductItemType>>({});

    const productId = 1;
    const userId = 1;
    const userName = "user1";

    const {
        name = "",
        description = "",
        discount = 0,
        price = 0,
        stock = 0,
        imageUrls = [],
        avgRatings = 0,
        ratingCount = 0,
        reviewCount = 0,
        ratingStats = { rating5: 0, rating4: 0, rating3: 0, rating2: 0, rating1: 0 },
        isUserRated = true,
        initialReviews = []
    } = productItem || {};

    const productData = {
        productId, userId, name, price, discount, stock, imageUrls, avgRatings, ratingCount, reviewCount
    };

    const ratingAndReviewsData = {
        productId, userId, userName, avgRatings, ratingCount, reviewCount, ratingStats, isUserRated, reviews: initialReviews
    };


    useEffect(() => {
        const fetchProductDetails = async () => {
            const product = await getProductItemDetails( productId, userName );
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
