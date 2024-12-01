"use client";

import React, { useEffect, useState } from 'react';
import RatingStar from '@/components/Product/RatingStar';
import Button from '@/components/Button/CustomButton';
import { Progress } from "@/components/ui/progress"
import { FaUser } from "react-icons/fa6";
import Pagination from '@/components/Table/Pagination';
import { getReviews } from '@/apis/productApi/productApi';


interface RatingStatsType {
    ratingCount: number,
    ratingStats: {
        [key in `rating${1 | 2 | 3 | 4 | 5}`]: number;
    }
}

interface ReviewType {
    user: string,
    rating: number,
    comment: string,
    ratedDate: string
}

interface RatingAndReviewsType extends RatingStatsType {
    productId: number,
    avgRatings: number,
    reviewCount: number,
    isUserRated: boolean,
    reviews: ReviewType[]
}


const RatingAndReviews: React.FC<RatingAndReviewsType> = ({ productId, avgRatings, ratingCount, ratingStats, reviewCount, isUserRated, reviews = [] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentReviews, setCurrentReviews] = useState(reviews);
    const numberOfReviewsPerPage = 5;
    const totalPages = Math.ceil(reviewCount / numberOfReviewsPerPage);

    useEffect(() => {
        setCurrentReviews(reviews);
    }, [reviews]);

    const handlePagination = async (page: number) => {
        const newReviews = await getReviews(productId, page);
        setCurrentReviews(newReviews);
        setCurrentPage(page);
    }

    return (
        <div className="px-3 py-7 md:p-7">
            <h3 className="font-medium">Ratings & Reviews</h3>

            <div className='lg:w-11/12 max-w-[1300px] mx-auto'>
                {/* Ratings Top Section */}
                <div className="max-w-[1000px] flex flex-col md:flex-row justify-around items-center mt-10 mx-auto">

                    {/* Overall Ratings */}
                    <div className="w-max flex flex-col items-center">
                        <div className="flex items-start mx-auto">
                            <span className="text-4xl tracking-wider leading-tight">{ avgRatings?.toPrecision(2) }</span>
                            <span className="text-2xl font-light text-neutral-600">/5</span>
                        </div>
                        <RatingStar value={avgRatings} />
                        <span className="text-neutral-600 w-full text-sm pl-1">{ ratingCount } ratings</span>
                    </div>

                    <RatingStats ratingStats={ ratingStats } ratingCount={ ratingCount } />

                    {!isUserRated && <Button buttonClassName="w-3/5 md:w-fit" buttonLabel="Rate Now" />}
                </div>

                {/* Comments */}
                <div className="my-10 space-y-4">
                    {currentReviews.map((review, index) => (
                        <ReviewCard key={index + review.user} {...review} />
                    ))}
                </div>
                    
                {/* Pagination */}
                {totalPages > 1 && 
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePagination} />
                }
            </div>
        </div>
    );
}



const RatingStats: React.FC<RatingStatsType> = ({ ratingStats, ratingCount : totalRatings }) => {

    return (
        <table className="table-auto w-full md:w-[35vw] lg:w-[25vw] mt-5 mb-10 md:my-0">
            <tbody>
                {[...Array(5)].map((_, index) => {
                    const ratingValue = 5 - index;
                    const ratingCount = ratingStats ? ratingStats[`rating${ratingValue}` as keyof typeof ratingStats] : 0;
                    const progressValue = totalRatings ? (ratingCount / totalRatings) * 100 : 0;    

                    return(
                        <tr key={ratingValue}>
                            <td className="whitespace-nowrap">
                                <RatingStar value={ ratingValue } small />
                            </td>
                            <td className="w-full px-2">
                                <Progress 
                                    value={ progressValue } 
                                    className="flex-1 bg-progress-background" 
                                />
                            </td>
                            <td className="whitespace-nowrap text-sm text-neutral-500">
                                <span>{ ratingCount }</span>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}



const ReviewCard: React.FC<ReviewType> = ({ user, rating, comment, ratedDate }) => {
    return (
        <div className="flex flex-col space-y-2 bg-slate-50 shadow-md rounded p-3">
            <div className='flex justify-between'>
                <div className="flex items-center space-x-1">
                    <span className='text-carnation-400'><FaUser/></span>
                    <span className="text-neutral-600 text-lg font-semibold">{ user }</span>
                </div>
                <RatingStar value={rating} small />
            </div>
            <p className="text-sm text-neutral-700 text-justify">{ comment }</p>
            <p className='text-xs text-neutral-600 text-right font-light'>{ ratedDate }</p>
        </div>
    );
}

export default RatingAndReviews;