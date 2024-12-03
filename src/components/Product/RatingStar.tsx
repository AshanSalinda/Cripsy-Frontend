"use client"

import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';

interface RatingProps {
    value?: number,
    readOnly?: boolean,
    small?: boolean,
}

 
const RatingStar: React.FC<RatingProps> = ({
    value = 0,
    readOnly = true,
    small = false
}) => {
    const [rating, setRating] = useState<number | null>(value);
    
    useEffect(() => {
        setRating(value);
    }, [value]);

    return (
        <Rating
            name="rating stars"
            value={rating}
            readOnly={readOnly}
            precision={readOnly ? 0.5 : 1}
            size={small ? 'medium' : 'large'}
            onChange={(e, newValue) => { setRating(newValue)}}
            sx={{
                '& .MuiRating-iconFilled': {
                    color: '#FFCD12',
                },
                '& .MuiRating-iconEmpty': {
                    color: '#949494',
                }
            }}
      />

    );
}


export default RatingStar;