"use client"

import React, { useState } from "react";
import Rating from '@mui/material/Rating';

type RatingProps = Readonly<{
    value: number | null,
    readOnly?: boolean,
    small?: boolean,
}>

export default function RatingStar(props: RatingProps) {
    const [value, setValue] = useState<number | null>(props.value);

    return (
        <Rating
            name="rating stars"
            value={value}
            readOnly={props.readOnly || false}
            precision={0.5}
            size={props.small ? 'small' : 'large'}
            onChange={(e, newValue) => { setValue(newValue)}}
      />

    );
}
