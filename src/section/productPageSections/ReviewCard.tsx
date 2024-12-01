import React from 'react';
import RatingStar from '@/components/Product/RatingStar';
import { FaUser } from "react-icons/fa6";


export interface ReviewType {
    user: string,
    rating: number,
    comment: string,
    ratedDate: string
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

export default ReviewCard;