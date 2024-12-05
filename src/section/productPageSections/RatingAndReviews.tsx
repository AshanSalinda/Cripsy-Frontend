"use client";
import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/CustomButton';
import RatingStar from '@/components/Product/RatingStar';
import Pagination from '@/components/Table/Pagination';
import RatingForm from './RatingForm';
import { getReviews, addReview } from '@/apis/productApi/productApi';
import ReviewCard, { ReviewType } from './ReviewCard';
import RatingStats, { RatingStatsType } from './RatingStats';


interface RatingAndReviewsType extends RatingStatsType {
    productId: number,
    userId: number,
    userName: string,
    avgRatings: number,
    reviewCount: number,
    isUserRated: boolean,
    reviews: ReviewType[]
}


const RatingAndReviews: React.FC<RatingAndReviewsType> = (props) => {
    const { productId, userId, userName, avgRatings, ratingCount, ratingStats, reviewCount, isUserRated, reviews = [] } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentReviews, setCurrentReviews] = useState(reviews);
    const [isRateFormVisible, setIsRateFormVisible] = useState(false);
    const [isRated, setIsRated] = useState(isUserRated);
    const numberOfReviewsPerPage = 5;
    const totalPages = Math.ceil(reviewCount / numberOfReviewsPerPage);

    useEffect(() => {
        setCurrentReviews(reviews);
    }, [reviews]);

    useEffect(() => {
        setIsRated(isUserRated);
    }, [isUserRated]);

    const handlePagination = async (page: number) => {
        const newReviews = await getReviews(productId, page);
        setCurrentReviews(newReviews);
        setCurrentPage(page);
        setTimeout(() => {
            const pagination = document.getElementById('pagination');
            if (pagination) {
                console.log(pagination);
                pagination.scrollIntoView({ behavior: 'smooth', block: 'end' });
            };
        }, 100);
    }

    const handleReview = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const rating = ((e.target as HTMLFormElement).elements.namedItem("rating stars") as HTMLInputElement)?.value;
        const comment = ((e.target as HTMLFormElement).elements.namedItem("comment") as HTMLInputElement)?.value;
        const action = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement)?.value;

        if (action === "cancel") {
            setIsRateFormVisible(false)
        } else if (action === "submit") {
            const updatedReviews = await addReview(productId, userId, userName, parseInt(rating), comment.trim());
            setCurrentReviews(updatedReviews);
            setCurrentPage(1);
            setIsRated(true);
            setIsRateFormVisible(false)
        }
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
                        <span className="text-neutral-600 w-full text-sm font-light pl-1">{`${ratingCount} ratings | ${reviewCount} Reviews`}</span>
                    </div>

                    <RatingStats ratingStats={ ratingStats } ratingCount={ ratingCount } />

                    { isRated && <Button buttonClassName="w-3/5 md:w-fit" buttonLabel="Rate Now" onClick={() => setIsRateFormVisible(true)}/> }
                </div>

                {/* Comments */}
                <div className="my-10 space-y-4">
                    {currentReviews.map((review, index) => (
                        <ReviewCard key={index + review.userName} {...review} />
                    ))}
                </div>
                    
                {/* Pagination */}
                {totalPages > 1 && 
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePagination} />
                }
            </div>

            {/* Rating Form Modal */}
            <RatingForm isRateFormVisible={isRateFormVisible} setIsRateFormVisible={setIsRateFormVisible} handleReview={handleReview} />
        </div>
    );
}


export default RatingAndReviews;