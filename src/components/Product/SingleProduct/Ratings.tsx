import React from 'react';
import RatingStar from '@/components/Product/RatingStar';
import Button from '@/components/Button/CustomButton';
import { Progress } from "@/components/ui/progress"
import { FaUser } from "react-icons/fa6";


interface PropsType {
    rating: number,
    ratingCount: number
}

const Ratings: React.FC<PropsType> = ({ rating, ratingCount }) => {
    return (
        <div className="px-3 py-7 md:p-7 box-border">
            <h3 className="font-semibold">Ratings & Comments</h3>

            {/* Ratings Top Section */}
            <div className="flex flex-col md:flex-row justify-around items-center mt-5 mx-2">

                {/* Overall Ratings */}
                <div className="w-max flex flex-col items-center">
                    <div className="flex items-start mx-auto">
                        <span className="text-4xl tracking-wider leading-tight">{rating}</span>
                        <span className="text-2xl font-light text-neutral-600">/5</span>
                    </div>
                    <RatingStar value={rating} />
                    <span className="text-neutral-600 w-full text-sm pl-1">{ratingCount} ratings</span>
                </div>

                {/* Ratings Breakdown */}
                <div className='w-full md:w-[35vw] lg:w-[25vw] pt-5 pb-10 md:py-0'>
                    <RatingStats rating={5} percentage={75} />
                    <RatingStats rating={4} percentage={92} />
                    <RatingStats rating={3} percentage={58} />
                    <RatingStats rating={2} percentage={33} />
                    <RatingStats rating={1} percentage={10} />
                </div>

                <Button buttonClassName="w-3/5 md:w-fit" buttonLabel="Rate Now" />
            </div>

            {/* Comments */}
            <div className="mt-5">
                <div className="flex flex-col space-y-5 mt-3">
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        </div>
    );
};

interface RatingStatsType {
    rating: number,
    percentage: number
}

const RatingStats: React.FC<RatingStatsType> = ({ rating, percentage = 0 }) => {
    return (
        <div className="flex items-center space-x-3">
            <RatingStar value={rating} small />
            <Progress value={percentage} className='flex-1 bg-progress-background' />
            <span className="text-neutral-600">{`${percentage} %`}</span>
        </div>  
    );
}

const Comment: React.FC = () => {
    return (
        <div className="flex flex-col space-y-2 bg-neutral-100 shadow-md rounded p-3">
            <div className='flex justify-between'>
                <div className="flex items-center space-x-1">
                    <span className='text-carnation-400'><FaUser/></span>
                    <span className="text-neutral-600 text-lg font-semibold">John Doe</span>
                </div>
                <RatingStar value={5} small />
            </div>
            <p className="text-sm text-neutral-700 text-justify p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies bibendum, nunc odio tincidunt purus, nec varius magna justo id libero.</p>
            <p className='text-xs text-neutral-500 text-right font-light'>01/05/2024</p>
        </div>
    );
}

export default Ratings;