import React from 'react';
import RatingStar from '@/components/Product/RatingStar';
import { FaUser } from "react-icons/fa6";


export interface ReviewType {
    userName: string,
    rating: number,
    comment: string,
    ratedDate: string
}

const ReviewCard: React.FC<ReviewType> = ({ userName, rating, comment, ratedDate }) => {

    const getLocalDate = (date: string) => {
        const offset = new Date().getTimezoneOffset() * 60 * 1000;
        const ratedTime = new Date(date).getTime() - offset;
        return new Date(ratedTime).toLocaleDateString('en-gb', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).replace(/ /g, '-');
    }
    

    return (
        <div className="flex flex-col space-y-2 bg-slate-50 shadow-md rounded p-3 md:px-5">
            <div className='flex justify-between'>
                <div className="flex items-center space-x-2">
                    <span className='text-carnation-400'><FaUser/></span>
                    <span className="text-neutral-600 text-lg font-semibold">{ userName }</span>
                </div>
                <RatingStar value={rating} small />
            </div>
            <p className="text-sm text-neutral-700 text-justify">{ comment }</p>
            <p className='text-xs text-neutral-600 text-right font-light'>{ getLocalDate(ratedDate) }</p>
        </div>
    );
}

export default ReviewCard;