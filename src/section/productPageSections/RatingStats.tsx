import React from 'react';
import RatingStar from '@/components/Product/RatingStar';
import { Progress } from "@/components/ui/progress"


export interface RatingStatsType {
    ratingCount: number,
    ratingStats: {
        [key in `rating${1 | 2 | 3 | 4 | 5}`]: number;
    }
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

export default RatingStats;