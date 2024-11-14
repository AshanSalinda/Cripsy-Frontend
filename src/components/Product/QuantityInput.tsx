"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
    min?: number;
    max?: number;
    value?: number;
    onChange?: (quantity: number) => void;
}

const QuantityInput: React.FC<Props> = ({
    min = 1,
    max = 1000,
    value = 1,
    onChange,
}) => {
    const [quantity, setQuantity] = useState(value);

    const handleIncrement = () => {
        if (quantity < max) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onChange && onChange(newQuantity);
        }
    };

    const handleDecrement = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onChange && onChange(newQuantity);
        }
    };


    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;

        if(key == 'ArrowUp' || key == 'ArrowRight'){
            handleIncrement();
        } else if (key == 'ArrowDown' || key == 'ArrowLeft') {
            handleDecrement();
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value >= min && value <= max) {
            setQuantity(value);
            onChange && onChange(value);
        }
    };

    return (
        <div className="flex items-center">
            <Button
                type="button"
                size="sm"
                onClick={handleDecrement}
                disabled={quantity <= min}
                className="bg-carnation-400 hover:bg-carnation-500 rounded-l-sm rounded-r-none border-none w-10 h-10 text-white text-lg select-none"
            >
                -
            </Button>
            <Input
                type="text"
                name="quantity"
                value={quantity}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="w-32 h-10 text-center text-white md:text-lg rounded-none border-none focus-visible:ring-0 bg-neutral-700"
            />
            <Button
                type="button"
                size="sm"
                onClick={handleIncrement}
                disabled={quantity >= max}
                className="bg-carnation-400 hover:bg-carnation-500 rounded-l-none rounded-r-sm border-none w-10 h-10 text-white text-lg select-none"
            >
                +
            </Button>
        </div>
    );

};

export default QuantityInput;
