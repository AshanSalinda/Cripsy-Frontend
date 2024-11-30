"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
    min?: number;
    max?: number;
    value?: number;
    small?: boolean;
    onChange?: (quantity: number) => void;
}

const QuantityInput: React.FC<Props> = ({
    min = 1,
    max = 1000,
    value = 1,
    small = false,
    onChange,
}) => {
    const [quantity, setQuantity] = useState(value);


    const setValue = (value: number) => {
        setQuantity(value);
        if (typeof onChange === "function"){
            onChange(value);
        }   
    }

    const handleIncrement = () => {
        if (quantity < max) {
            const newQuantity = quantity + 1;
            setValue(newQuantity);
        }
    };

    const handleDecrement = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1;
            setValue(newQuantity);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;
        if(key == 'ArrowUp'){ handleIncrement(); } 
        else if (key == 'ArrowDown') { handleDecrement(); }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setValue(isNaN(value) ? 0 : value);
    };

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value, 10);

        if(isNaN(value)){ value = min; } 
        else if (value < min){ value = min; } 
        else if (value > max){ value = max; }

        setValue(value);
    };

    const buttonClasses = `bg-carnation-400 hover:bg-carnation-500 border-none text-white select-none ${small ? 'w-7 h-7 text-md rounded-full' : 'w-10 h-10 text-lg'}`;

    return (
        <div className='flex items-center'>
            <Button
                type="button"
                size="sm"
                onClick={handleDecrement}
                disabled={quantity <= min}
                className={'rounded-l-sm rounded-r-none ' + buttonClasses}
            >
                -
            </Button>
            <Input
                type="text"
                name="quantity"
                value={quantity}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className={"text-center md:text-lg rounded-none border-none focus-visible:ring-0 " + (small ? 'h-7 w-14' : ' h-10 w-32 bg-neutral-700 text-white')}
            />
            <Button
                type="button"
                size="sm"
                onClick={handleIncrement}
                disabled={quantity >= max}
                className={"rounded-l-none rounded-r-sm " + buttonClasses}
            >
                +
            </Button>
        </div>
    );

};

export default QuantityInput;
